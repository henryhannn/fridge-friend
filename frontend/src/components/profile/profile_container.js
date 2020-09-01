// src/components/session/signup_form_container.js
import { logout } from '../../actions/session_actions';
import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
