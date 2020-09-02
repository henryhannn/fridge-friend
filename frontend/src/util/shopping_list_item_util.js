import axios from "axios";

// get index of all food items
//check with jack what the end point is
export const getShoppingListItems = () => {
  return axios.get("/api/shoppinglist");
};