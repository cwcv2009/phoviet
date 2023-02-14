import "./Menu.css";
import Categories from "../features/categories/Categories";
import {
  isLoadingCategories,
  loadCategories,
} from "../features/categories/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Menu() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingCategories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div>
      {loading && <div>loading</div>}
      {!loading && <Categories />}
    </div>
  );
}
