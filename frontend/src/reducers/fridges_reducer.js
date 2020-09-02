import { RECEIVE_FRIDGES } from "../actions/fridge_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const fridgesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_FRIDGES:
      newState = {};
      action.fridges.data.forEach(fridge => {
        newState[fridge._id] = { 
          _id: fridge._id,
          name: fridge.name,
          participants: fridge.participants
        };
      });
      return newState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return oldState;
  }
};

export default fridgesReducer;
