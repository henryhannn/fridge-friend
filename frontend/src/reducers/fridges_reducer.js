import { RECEIVE_FRIDGES } from "../actions/fridge_actions";

const fridgesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_FRIDGES:
      newState = {};
      action.fridges.forEach(fridge => {
        newState[fridge._id] = {
          _id: fridge._id,
          name: fridge.name,
          participants: fridge.participants
        };
      });
      return newState;
    default:
      return oldState;
  }
};

export default fridgesReducer;