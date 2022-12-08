import { createSlice } from '@reduxjs/toolkit';
import { addItemId } from '../categories/categoriesSlice';

// Slice Object
//////////////////////////
export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        //itemId: { 
        //  itemId: itemId,
        //  category: categoryId,    
        //  name: name,
        //  icon: icon,
        //  description: description,
        //  price: {s: price, m: price, l: price} || price,
        //  cal: cal
        //}
    },
    reducers: {
        addItem: (state, action) => {
            const { itemId, categoryId, name, icon, description, price, cal} = action.payload;
            state[itemId] = {
                itemId: itemId,
                categoryId: categoryId,
                icon: icon,
                description: description,
                price: price,
                cal: cal
            }
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            delete state[id];
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
