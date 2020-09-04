import { connect } from "react-redux";
import FoodCalendar from "./food_calendar";
import {fetchUserFridges} from '../../actions/fridge_actions';


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

export default connect(mapStateToProps, mapDispatchToProps)(FoodCalendar);
