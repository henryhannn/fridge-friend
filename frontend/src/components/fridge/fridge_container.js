import { connect } from "react-redux";
import {
  requestFridgeItems,
  removeFridgeItem,
  editFridgeItemQuantity
} from "../../actions/fridge_items_actions";
import Fridge from "./fridge";
import { selectFridge } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const fridge = state.entities.fridges[ownProps.match.params.fridgeId]
  return {
    fridgeId: ownProps.match.params.fridgeId,
    fridge: selectFridge(state, fridge),
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
