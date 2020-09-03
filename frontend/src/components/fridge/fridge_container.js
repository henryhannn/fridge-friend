import { connect } from "react-redux";
import {
  receiveFridge,
  removeFridge,
  fetchUserFridges,
  createFridge,
  deleteFridge
} from "../../actions/fridge_actions";
import Fridge from "./fridge";

const mapStateToProps = (state) => {
  return {
    fridgeId: state.fridge.id,
    name: state.fridge.name,
    participants: state.fridge.participants,
    fridgeItems: state.entities.fridgeItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveFridge: (fridge) => dispatch(receiveFridge(fridge)),
    removeFridge: (fridge) => dispatch(removeFridge(fridge)),
    fetchUserFridges: (userId) => dispatch(fetchUserFridges(userId)),
    createFridge: (userId, name) => dispatch(createFridge(userId, name)),
    deleteFridge: (fridgeId) => dispatch(deleteFridge(fridgeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
