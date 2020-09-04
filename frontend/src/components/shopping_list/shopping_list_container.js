import { connect } from "react-redux";
import ShoppingList from "./shopping_list";
import {
  removeShoppingListItem,
  toggleItemDone,
  editShoppingListItemQuantity,
  requestShoppingListItems
} from "../../actions/shopping_list_item_actions";
import { addFridgeItem } from '../../actions/fridge_items_actions';

const mapStateToProps = (state) => {
  return {
    userId: state.session.user.id,
    listItems: state.entities.shoppingListItems,
    fridges: state.entities.fridges
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (userId, itemId) => dispatch(removeShoppingListItem(userId, itemId)),
    toggleItemDone: (userId, itemId) => dispatch(toggleItemDone(userId, itemId)),
    editQuantity: (userId, itemId, newQuant) =>
      dispatch(editShoppingListItemQuantity(userId, { listItemId: itemId, quantity: newQuant })),
    requestItems: (userId) => dispatch(requestShoppingListItems(userId)),
    addFridgeItem: (fridgeId, itemData) => dispatch(addFridgeItem(fridgeId, itemData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
