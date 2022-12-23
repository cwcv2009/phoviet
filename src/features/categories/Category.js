import { selectCategories } from "./categoriesSlice";
import { useSelector } from "react-redux";
import Item from "../items/Item";

export default function Category({ categoryIndex }) {
  const categories = useSelector(selectCategories);
  const category = categories[categoryIndex];

  return (
    <div>
      <div>{category.name}</div>
      <div>
        {category.itemIds.map((itemId, index) => {
          return <Item key={index} itemId={itemId} />;
        })}
      </div>
    </div>
  );
}
