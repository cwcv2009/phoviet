import "./Categories.css";
import Items from "../items/Items";
import { isLoadingItems, loadItems } from "../items/itemsSlice";
import { selectCategories } from "./categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Categories() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingItems);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div className="categories" key={index}>
            <img
              className="categoryImages"
              src={"/thumbnails/CategoryThumbnail.png"}
              alt=""
            ></img>
            <h1>{category.name}_____________________</h1>
            <Items categoryId={category.categoryId} />
          </div>
        );
      })}
    </div>
  );
}
