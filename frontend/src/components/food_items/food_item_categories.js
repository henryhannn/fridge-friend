import React from "react";
import FoodItemCategoryItem from "./food_item_category_item"; 

const FoodItemCategories = (props) => {
  const categories = [
    {
      name: "condiment",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/condiments.svg",
    },
    {
      name: "dairy",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/dairy.svg",
    },
    {
      name: "dessert",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/dessert1.svg",
    },
    {
      name: "drink",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/drinks.svg",
    },
    {
      name: "eggs",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/egg.svg",
    },
    {
      name: "fruit",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/fruits.svg",
    },
    {
      name: "grains",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/grains.svg",
    },
    {
      name: "leftovers",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/leftovers.svg",
    },
    {
      name: "party",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/party.svg",
    },
    {
      name: "protein",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/protein.svg",
    },
    {
      name: "vegetable",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/vegetables.svg",
    },
    {
      name: "other",
      imageUrl:
        "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/other.svg",
    },
  ];

  return (
    <ul className="food-item-categories">
      {categories.map((category, idx) => (
        <li className="food-item-category-item" key={idx}>
          <FoodItemCategoryItem category={category} />
        </li>
      ))}
    </ul>
  );
}

export default FoodItemCategories; 