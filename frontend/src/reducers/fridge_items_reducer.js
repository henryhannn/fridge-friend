import { RECEIVE_FRIDGE_ITEMS } from "../actions/fridge_items_actions";

const fridgeItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_FRIDGE_ITEMS:
      return action.fridgeItems.data;
    default:
      return oldState;
  }
};

export default fridgeItemsReducer;
