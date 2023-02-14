import { useSelector } from "react-redux";
import { selectItems } from "./itemsSlice";

export default function Item({ itemIndex }) {
  const items = useSelector(selectItems);
  const item = items[itemIndex];

  return(
    <div>
      {"item"}
    </div>
  );
}