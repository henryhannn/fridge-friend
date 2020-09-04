import { combineReducers } from "redux";
import foodItemsReducer from "./food_items_reducer";
import fridgeItemsReducer from './fridge_items_reducer';
import fridgesReducer from './fridges_reducer';
import shoppingListItemsReducer from './shopping_list_items_reducer';
import usersReducer from './users_reducer'; 

const entitiesReducer = combineReducers({
  foodItems: foodItemsReducer, 
  fridgeItems: fridgeItemsReducer,
  fridges: fridgesReducer,
  shoppingListItems: shoppingListItemsReducer,
  users: usersReducer, 
});

export default entitiesReducer;