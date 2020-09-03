import { RECEIVE_FRIDGE_ITEMS } from "../actions/fridge_items_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const fridgeItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_FRIDGE_ITEMS:
      newState = {};
      action.fridgeItems.forEach(fridgeItem => {
        newState[fridgeItem._id] = fridgeItem;
      });
      return newState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return oldState;
  }
};

export default fridgeItemsReducer;