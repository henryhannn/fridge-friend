import { connect } from "react-redux";
import ShoppingList from "./shopping_list";
import {
  removeShoppingListItem,
  toggleItemDone
} from "../../actions/shopping_list_item_actions";

const mapStateToProps = (state) => {
  return {
    userId: state.session.user.id,
    listItems: state.entities.shoppingListItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (userId, itemId) => dispatch(removeShoppingListItem(userId, itemId)),
    toggleItemDone: (userId, itemId) => dispatch(toggleItemDone(userId, itemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
