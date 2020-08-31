import * as foodItemAPIUtil from '../util/food_item_util'; 

export const RECEIVE_FOOD_ITEMS = "RECEIVE_FOOD_ITEMS"; 
export const FILTER_BY_FOOD_GROUP = "FILTER_BY_FOOD_GROUP";

const receiveFoodItems = (foodItems) => ({
  type: RECEIVE_FOOD_ITEMS,
  foodItems
});

export const filterByFoodGroup = (foodGroup) => ({
  type: FILTER_BY_FOOD_GROUP,
  foodGroup 
});

export const requestFoodItems = () => (dispatch) =>
  foodItemAPIUtil.getFoodItems()
    .then((foodItems) => dispatch(receiveFoodItems(foodItems)));
