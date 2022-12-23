import { useSelector } from "react-redux";
import { selectItems } from "./itemsSlice";

export default function Item({ itemId }) {
  const items = useSelector(selectItems);
  // console.log(items.isLoadingItems);
  // const item = items.find(item => item.itemId === itemId);

  return <div>{}</div>;
}
