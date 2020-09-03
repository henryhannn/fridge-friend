import { RECEIVE_FRIDGES } from '../actions/fridge_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const userOwnedItemsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [ ...oldState ];
  switch (action.type) {
    case RECEIVE_FRIDGES:
      newState = [];
      action.fridges.forEach(fridge => {
        fridge.fridgeContainer.forEach(item => {
          if (item.owner == action.userId) {
            newState.push(item);
            newState[newState.length - 1].fridgeId = fridge._id;
            newState[newState.length - 1].fridgeName = fridge.name;
          }
        });
      });
      return newState;
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return oldState;
  }
}

export default userOwnedItemsReducer;