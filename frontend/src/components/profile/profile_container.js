import { logout } from '../../actions/session_actions';
import { fetchUserFridges, createFridge } from "../../actions/fridge_actions"; 
import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    userId: state.session.user.id,
    fridges: Object.values(state.entities.fridges),
  };
};

const mapDispatchToProps = (dispatch) => {
  //need action to create fridge
  return {
    createFridge: (userId, name) => dispatch(createFridge(userId, name)), 
    fetchUserFridges: (userId) => dispatch(fetchUserFridges(userId)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
