import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Slice Object
//////////////////////////
export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadItems.pending, (state, action) => {
        state.status = "loading";
        state.error = false;
      })
      .addCase(loadItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "idle";
        state.error = false;

      })
      .addCase(loadItems.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

// Selectors
//////////////////////////
export const selectItems = (state) => state.items.items;
export const itemsStatus = (state) =>
  state.items.status;
export const itemsError = (state) =>
  state.items.error;

// Asynchronous Thunk
//////////////////////////
export const loadItems = createAsyncThunk(
  "items/loadItems",
  async (thunkAPI) => {
    const data = await fetch(`/items`);
    const json = await data.json();
    return json;
  }
);

// Exports
//////////////////////////
export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
