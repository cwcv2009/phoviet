import { isLoadingCategories, loadCategories } from "../features/categories/categoriesSlice";
import { isLoadingItems, loadItems } from "../features/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Menu() {
  const dispatch = useDispatch();
  const loadingCategories = useSelector(isLoadingCategories);
  const loadingItems = useSelector(isLoadingItems);

  useEffect(() => {
    dispatch(loadCategories());
    console.log("categories");
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadItems());
    console.log("items");
  }, [dispatch]);

  return (
    <div>
      {loadingCategories ? <p>Loading Categories</p> : <p>Category</p>}
      {loadingItems ? <p>Loading Items</p> : <p>Items</p>}
    </div>
  );
}
