import { createSlice } from '@reduxjs/toolkit';

// Slice Object
//////////////////////////
export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        //total: basketTotal,
        //items: {
        //  itemId: {
        //      itemId: itemId,
        //      category: categoryId,    
        //      name: name,
        //      icon: icon,
        //      description: description,
        //      price: {s: price, m: price, l: price} || price,
        //      cal: cal
        //  }
        //}
    },
    reducers: {
        addItem: (state, action) => {
            const {} = action.payload;
            state
        }
    }
});

// Selectors
//////////////////////////
export const selectItems = (state) => state.items;

// Asynchronous Thunks
//////////////////////////
export const addItemAddItemId = (item) =>{
    const { categoryId, itemId } = item;
    return (dispatch) => {
        dispatch(itemsSlice.actions.addItem(item));
        dispatch(addItemId({ categoryId: categoryId, itemId: itemId })); ///////////may produce an error
    }
}

// Exports
//////////////////////////
export const {
    addItem,
    removeItem
 } = itemsSlice.actions;

export default itemsSlice.reducer;
