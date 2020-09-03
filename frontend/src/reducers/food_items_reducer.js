import { RECEIVE_FOOD_ITEMS, FILTER_BY_FOOD_GROUP } from "../actions/food_items_actions"; 
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const foodItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  let newState = { ...oldState }; 
  switch (action.type) {
    case RECEIVE_FOOD_ITEMS: 
      return action.foodItems.data; 
    
    case FILTER_BY_FOOD_GROUP:
      //access through foodId
      if (action.foodGroup === "all") {
        return oldState;
      } else {
        let newStateArray = Object.values(newState);
        for (let i = 0; i < newStateArray.length; i++) {
          let foodItem = newStateArray[i];
          if (foodItem.category !== action.foodGroup) {
            delete newState[foodItem._id];
          }
        }
        return newState;
      }
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return oldState; 
  }
}

export default foodItemsReducer; 