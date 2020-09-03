import {
  RECEIVE_FRIDGES,
  RECEIVE_FRIDGE,
  REMOVE_FRIDGE
} from "../actions/fridge_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const fridgesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_FRIDGES:
      newState = {};
      console.log(action.fridges);  
      action.fridges.forEach(fridge => {
        newState[fridge._id] = {
          _id: fridge._id,
          name: fridge.name,
          participants: fridge.participants
        };
      });
      return newState;
    case RECEIVE_FRIDGE:
      newState[action.fridge._id] = action.fridge;
      return newState;
    case REMOVE_FRIDGE:
      delete newState[action.fridgeId];
      return newState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return oldState;
  }
};

export default fridgesReducer;