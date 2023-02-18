import "./Categories.css";
import {
  selectCategories
} from "./categoriesSlice";
import { useSelector } from "react-redux";

export default function Categories() {
  const categories = useSelector(selectCategories);

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <h1>{category.name}_____________________</h1>
            <img src={"/thumbnails/CategoryThumbnail.png"} alt=""></img>
          </div>
        );
      })}
    </div>
  );
}