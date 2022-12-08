import { createSlice } from '@reduxjs/toolkit';

// Slice Object
//////////////////////////
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        //categoryId: { 
        //  categoryId: categoryId,
        //  name: name,
        //  icon: icon,
        //  itemIds: []
        //}
    },
    reducers: {
        addCategory: (state, action) => {
            const { id, name, icon } = action.payload;
            state[id] = { 
                id: id, 
                name: name,
                icon: icon,
                itemIds: []
            }
        },
        removeCategory: (state, action) => {
            const { id } = action.payload;
            delete state[id];
        },
        addItemId: (state, action) => {
            const { categoryId, itemId} = action.payload;
            state[categoryId].push(itemId);
        },
        removeItemId: (state, action) => {
            const { categoryId, itemId} = action.payload;
            state[categoryId].filter(id => id !== itemId);
        }
    }
});

// Selectors
//////////////////////////
export const selectCategories = (state) => state.categories;

// Exports
//////////////////////////
export const {
    addCategory,
    removeCategory,
    addItemId,
    removeItemId
 } = categoriesSlice.actions;

export default categoriesSlice.reducer;
