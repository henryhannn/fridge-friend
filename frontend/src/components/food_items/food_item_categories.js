import React from "react";
import FoodItemCategoryItem from "./food_item_category_item"; 

const FoodItemCategories = (props) => {
  const categories = [
    { name: "condiment", imageUrl: "" },
    { name: "dairy", imageUrl: "" },
    { name: "dessert", imageUrl: "" },
    { name: "drink", imageUrl: "" },
    { name: "eggs", imageUrl: "" },
    { name: "fruit", imageUrl: "" },
    { name: "grains", imageUrl: "" },
    { name: "leftovers", imageUrl: "" },
    { name: "party", imageUrl: "" },
    { name: "protein", imageUrl: "" },
    { name: "vegetable", imageUrl: "" },
    { name: "other", imageUrl: "" },
  ];

  return (
    <ul className="food-item-categories">
      {categories.map((category, idx) => (
        <li key={idx}>
          <FoodItemCategoryItem category={category}/>
        </li>
      ))}
    </ul>
  )
}

export default FoodItemCategories; 