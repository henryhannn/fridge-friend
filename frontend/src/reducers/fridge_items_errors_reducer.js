import { RECEIVE_FRIDGE_ITEMS_ERRORS } from "../actions/fridge_items_actions";

const _nullErrors = [];

const FridgeItemsErrorsReducer = (state = _nullErrors, action) => {
 
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIDGE_ITEMS_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default FridgeItemsErrorsReducer;
