import {RECEIVE_USERS} from "../actions/users_actions"; 

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users.data;

    default:
      return oldState;
  }
};

export default usersReducer;
