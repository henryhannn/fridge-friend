import * as fridgeAPIUtil from "../util/fridge_util";

export const RECEIVE_FRIDGES = "RECEIVE_FRIDGES";
export const RECEIVE_FRIDGE = "RECEIVE_FRIDGE";
export const REMOVE_FRIDGE = "REMOVE_FRIDGE";

export const receiveFridges = (fridges, userId) => ({
  type: RECEIVE_FRIDGES,
  fridges,
  userId
});

export const receiveFridge = (fridge) => ({
  type: RECEIVE_FRIDGE,
  fridge
});

export const removeFridge = (fridgeId) => ({
  type: REMOVE_FRIDGE,
  fridgeId
});

export const fetchUserFridges = (userId) => dispatch => 
  fridgeAPIUtil.fetchFridges(userId)
    .then(fridges => dispatch(receiveFridges(fridges.data, userId)));

export const createFridge = (userId, name) => dispatch =>
  fridgeAPIUtil.createFridge(userId, name)
    .then(fridge => dispatch(receiveFridge(fridge.data)));

export const leaveFridge = (fridgeId, userId) => dispatch =>
  fridgeAPIUtil.leaveFridge(fridgeId, userId)
    .then(fridge => dispatch(removeFridge(fridge.data._id)));
  
export const editFridgeParticipants = (fridgeId, userId) => (dispatch) =>
  fridgeAPIUtil
    .addUserToFridge(fridgeId, userId)
    .then((fridge) => dispatch(receiveFridge(fridge.data)));

