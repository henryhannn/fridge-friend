import { combineReducers } from "redux";
import foodItemsReducer from "./food_items_reducer"; 

const entitiesReducer = combineReducers({
  foodItems: foodItemsReducer, 
});

export default entitiesReducer;