import { connect } from "react-redux";
import FoodItemModalForm from "./food_item_modal_form"; 
import {addFridgeItem} from "../../actions/fridge_items_actions"; 
import { addShoppingListItem } from "../../actions/shopping_list_item_actions"; 
import { fetchUserFridges } from "../../actions/fridge_actions"; 
import { withRouter } from "react-router-dom";

//need user patch and fridge patch - add items to either place 

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    category: ownProps.category,
    imageUrl: ownProps.imageUrl,
    fridges: Object.values(state.entities.fridges),
    userId: state.session.user.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserFridges: (userId) => 
    dispatch(fetchUserFridges(userId)), 
  addFridgeItem: (fridgeId, itemData) =>
    dispatch(addFridgeItem(fridgeId, itemData)),
  addShoppingListItem: (userId, itemData) =>
    dispatch(addShoppingListItem(userId, itemData)),
});

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodItemModalForm))
