import { connect } from "react-redux";
import {requestUsers} from "../../actions/users_actions"; 
import {editFridgeParticipants} from "../../actions/fridge_actions"; 
import UserSearchAndAdd from "./user_search_add"; 


const mapStateToProps = (state, ownProps) => {
  return {
    users: Object.values(state.entities.users), 
    participants: ownProps.participants,
    fridge: ownProps.fridge, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUsers: () => dispatch(requestUsers()),
    addParticipant: (fridgeId, userId) =>
      dispatch(editFridgeParticipants(fridgeId, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchAndAdd);
