import { connect } from "react-redux";
import Today from "./today";
import { fetchUserFridges } from '../../actions/fridge_actions';

const mapStateToProps = (state) => {
  return {
    userOwnedItems: state.entities.userOwnedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFridges: (fridges) => dispatch(fetchUserFridges(fridges))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);
