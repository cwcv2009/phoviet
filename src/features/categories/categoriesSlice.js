import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Slice Object
//////////////////////////
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoadingCategories: false,
    failedToLoadCategories: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state, action) => {
        state.isLoadingCategories = true;
        state.failedToLoadCategories = false;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoadingCategories = false;
        state.failedToLoadCategories = false;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.isLoadingCategories = false;
        state.failedToLoadCategories = true;
      });
  },
});

// Selectors
//////////////////////////
export const selectCategories = (state) => state.categories.categories;
export const isLoadingCategories = (state) =>
  state.categories.isLoadingCategories;
export const failedToLoadCategories = (state) =>
  state.categories.failedToLoadCategories;

// Asynchronous Thunk
//////////////////////////
export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async () => {
    const data = await fetch(`/categories`);
    const json = await data.json();
    return json;
  }
);

export default categoriesSlice.reducer;
