import { connect } from "react-redux";
import {
  requestFridgeItems,
  removeFridgeItem,
  editFridgeItemQuantity,
  editFridgeItemExpDate
} from "../../actions/fridge_items_actions";
import Fridge from "./fridge";
import { selectFridge } from "../../reducers/selectors";
import { leaveFridge } from "../../actions/fridge_actions";

const mapStateToProps = (state, ownProps) => {
  const fridge = state.entities.fridges[ownProps.match.params.fridgeId]
  return {
    fridgeId: ownProps.match.params.fridgeId,
    fridge: selectFridge(state, fridge),
    fridgeItems: state.entities.fridgeItems,
    userId: state.session.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestFridgeItems: (fridgeId) => dispatch(requestFridgeItems(fridgeId)),
    removeFridgeItem: (fridgeId, fridgeItemId) =>
      dispatch(removeFridgeItem(fridgeId, fridgeItemId)),
    editFridgeItemQuantity: (fridgeId, itemData) =>
      dispatch(editFridgeItemQuantity(fridgeId, itemData)),
    leaveFridge: (fridgeId, userId) => dispatch(leaveFridge(fridgeId, userId)),
    editFridgeItemExpDate: (fridgeId, itemData) =>
      dispatch(editFridgeItemExpDate(fridgeId, itemData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
