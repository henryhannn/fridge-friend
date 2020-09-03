import { connect } from "react-redux";
import {
  requestFridgeItems,
  removeFridgeItem,
  editFridgeItemQuantity
} from "../../actions/fridge_items_actions";
import Fridge from "./fridge";

const mapStateToProps = (state, ownProps) => {
  return {
    fridgeId: ownProps.match.params.fridgeId,
    fridge: state.fridges[ownProps.match.params.fridgeId],
    fridgeItems: state.entities.fridgeItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestFridgeItems: fridgeId => dispatch(requestFridgeItems(fridgeId)),
    removeFridgeItem: (fridgeId, fridgeItemId) => dispatch(removeFridgeItem(fridgeId, fridgeItemId)),
    editFridgeItemQuantity: (fridgeId, itemData) => dispatch(editFridgeItemQuantity(fridgeId, itemData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
