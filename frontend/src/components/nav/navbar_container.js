import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUserFridges } from "../../actions/fridge_actions"; 

import NavBar from "./navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user.id,
  fridges: Object.values(state.entities.fridges),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUserFridges: (userId) => dispatch(fetchUserFridges(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
