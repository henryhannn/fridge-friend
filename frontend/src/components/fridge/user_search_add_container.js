import { connect } from "react-redux";
import UserSearchAndAdd from "./user_search_add"; 


const mapStateToProps = (state, ownProps) => {
  return {
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchAndAdd);
