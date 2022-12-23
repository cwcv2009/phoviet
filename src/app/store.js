import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import itemsReducer from "../features/items/itemsSlice";

export default configureStore({
	reducer: {
		menu: menuReducer,
		categories: categoriesReducer,
		items: itemsReducer
	},
});