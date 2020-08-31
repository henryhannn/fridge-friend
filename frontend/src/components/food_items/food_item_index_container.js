import { connect } from "react-redux";
import FoodItemIndex from './food_item_index'; 
import {filterByFoodGroup, requestFoodItems} from '../../actions/food_items_actions'; 

const mapStateToProps = (state) => ({
  foodItems: Object.values(state.entities.foodItems),
});

const mapDispatchToProps = (dispatch) => ({
  requestFoodItems: () => dispatch(requestFoodItems()),
  filterByFoodGroup: (foodGroup) => dispatch(filterByFoodGroup(foodGroup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemIndex); 