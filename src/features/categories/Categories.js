import "./Categories.css";
import Items from "../items/Items";
import { isLoadingItems, loadItems } from "../items/itemsSlice";
import { selectCategories } from "./categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Categories() {
  const categories = useSelector(selectCategories);
  // const dispatch = useDispatch();
  const loading = useSelector(isLoadingItems);

  // useEffect(() => {
  //   dispatch(loadItems());
  // }, [dispatch]);

  return (
    <div>
      {loading && <div>Loading Items</div>}
      {!loading && <div>Items</div>}
    </div>
  );
}
