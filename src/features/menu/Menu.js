import "./Menu.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./filter/Filter";
import Category from "../categories/Category";
import { loadCategories } from "../categories/categoriesSlice";
import { loadItems } from "../items/itemsSlice";
import { selectCategories } from "../categories/categoriesSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div className="menu">
      <div className="fitlers">
        {categories.map((unusedParameter, index) => {
          return <Filter key={index} categoryIndex={index} />;
        })}
      </div>
      <div className="categories">
        {categories.map((category, index) => {
          if (category.display) {
            return <Category key={index} categoryIndex={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
