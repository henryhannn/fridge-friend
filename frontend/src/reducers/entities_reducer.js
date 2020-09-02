import { combineReducers } from "redux";
import foodItemsReducer from "./food_items_reducer";
import fridgeItemsReducer from './fridge_items_reducer';
import shoppingListItemsReducer from './shopping_list_items_reducer';

const entitiesReducer = combineReducers({
  foodItems: foodItemsReducer, 
  fridgeItems: fridgeItemsReducer,
  shoppingListItems: shoppingListItemsReducer,
});

export default entitiesReducer;