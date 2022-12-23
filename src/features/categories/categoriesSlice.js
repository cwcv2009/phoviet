import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Slice Object
//////////////////////////
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoadingCategories: false,
        failedToLoadCategories: false
    },
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        removeCategory: (state, action) => {
            state.categories.filter(category => category !== action.payload);
        },
        addItemId: (state, action) => {
            const { categoryIndex, itemId } = action.payload;
            state.categories[categoryIndex].itemIds.push(itemId);
        },
        removeItemId: (state, action) => {
            const { categoryIndex, itemIdIndex } = action.payload;
            state.categories[categoryIndex].itemIds.filter(itemId => itemId !== itemIdIndex);
        },
        toggleDisplay: (state, action) => {
            const categoryIndex = action.payload;
            state.categories[categoryIndex].display === true ? state.categories[categoryIndex].display = false : state.categories[categoryIndex].display = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCategories.pending, (state, action) => {
                state.isLoadingCategories = true;
                state.failedToLoadCategories = false;
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.isLoadingCategories = false;
                state.failedToLoadCategories = false;
                action.payload.forEach(category => state.categories.push(category));
            })
            .addCase(loadCategories.rejected, (state, action) => {
                state.isLoadingCategories = false;
                state.failedToLoadCategories = true;   
            })
    }
});

// Selectors
//////////////////////////
export const selectCategories = (state) => state.categories.categories;

// Asynchronous Thunk
//////////////////////////
export const loadCategories = createAsyncThunk(
    'categories/loadCategories',
    async () => {
      const data = await fetch(`/categories`);
      const json = await data.json();
      return json;
    }
  );

// Exports
//////////////////////////
export const {
    addCategory,
    removeCategory,
    addItemId,
    removeItemId,
    toggleDisplay
 } = categoriesSlice.actions;

export default categoriesSlice.reducer;
