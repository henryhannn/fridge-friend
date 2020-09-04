import { combineReducers } from "redux";
import foodItemsReducer from "./food_items_reducer";
import fridgeItemsReducer from './fridge_items_reducer';
import fridgesReducer from './fridges_reducer';
import shoppingListItemsReducer from './shopping_list_items_reducer';

import usersReducer from './users_reducer'; 

import userOwnedItemsReducer from "./user_owned_items_reducer";


const entitiesReducer = combineReducers({
  foodItems: foodItemsReducer, 
  fridgeItems: fridgeItemsReducer,
  fridges: fridgesReducer,
  shoppingListItems: shoppingListItemsReducer,
  users: usersReducer, 
  userOwnedItems: userOwnedItemsReducer,

});

export default entitiesReducer;