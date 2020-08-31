import { RECEIVE_FOOD_ITEMS, FILTER_BY_FOOD_GROUP } from "../actions/food_items_actions"; 

const foodItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState); 
  let newState = { ...oldState }; 
  switch (action.type) {
    case RECEIVE_FOOD_ITEMS: 
      return action.foodItems; 
    
    case FILTER_BY_FOOD_GROUP:
      //access through foodId
      if (action.foodGroup === "all") {
        return oldState;
      } else {
        let newStateArray = Object.values(newState);
        for (let i = 0; i < newStateArray.length; i++) {
          let foodItem = newStateArray[i];
          if (foodItem.category !== action.foodGroup) {
            delete newState[foodItem.id];
          }
        }
        return newState;
      }
    
    default:
      return oldState; 
  }
}

export default foodItemsReducer; 