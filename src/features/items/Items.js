import "./Items.css";
import { useSelector } from "react-redux";
import { selectItems } from "./itemsSlice";

export default function Item({ categoryId }) {
  const items = useSelector(selectItems);

  return (
    <div>
      {items.map((item, index) => {
        if (item.categoryId === categoryId) {
          return (
            <div className="items" key={index}>
              {/* <img
                className="itemImages"
                src={"/thumbnails/itemThumbnail.png"}
                alt=""
              ></img> */}
              <h2>{item.name}</h2>
              <h3>{item.s}</h3>
            </div>
          );
        }
      })}
    </div>
  );
}
