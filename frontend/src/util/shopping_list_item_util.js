import axios from "axios";

// get index of all food items
//check with jack what the end point is
export const getShoppingListItems = (userId) => {
  return axios.get(`/api/users/${userId}/shoppinglist`);
};


// this route can do three things
//  1. toggle done on item - list data contains listItemId key and toggle: true
      //  !! will DELETE ITEM without toggle: true
//  2. remove list item - list data contains only listItemId key
//  3. add list item - list data contains keys of name, category, and imageUrl
// response is always user's shopping list - can be changed
export const editShoppingList = (userId, listData) => {
  return axios.patch(`/api/users/${userId}`, listData);
}