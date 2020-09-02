import { combineReducers } from "redux";
import foodItemsReducer from "./food_items_reducer";
import fridgesReducer from './fridges_reducer';
import shoppingListItemsReducer from './shopping_list_items_reducer';

const entitiesReducer = combineReducers({
  foodItems: foodItemsReducer, 
  fridges: fridgesReducer,
  shoppingListItems: shoppingListItemsReducer,
});

export default entitiesReducer;