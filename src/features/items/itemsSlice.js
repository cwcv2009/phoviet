import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Slice Object
//////////////////////////
export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    isLoadingItems: false,
    failedToLoadItems: false,
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
        state.isLoadingItems = true;
        state.failedToLoadItems = false;
      })
      .addCase(loadItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoadingItems = false;
        state.failedToLoadItems = false;
      })
      .addCase(loadItems.rejected, (state, action) => {
        state.isLoadingItems = false;
        state.failedToLoadItems = true;
      });
  },
});

// Selectors
//////////////////////////
export const selectItems = (state) => state.items.items;
export const isLoadingItems = (state) => state.items.isLoadingItems;
export const failedToLoadItems = (state) =>state.items.failedToLoadItems;

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
