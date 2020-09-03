import * as fridgeAPIUtil from "../util/fridge_util";

export const RECEIVE_FRIDGES = "RECEIVE_FRIDGES";
export const RECEIVE_FRIDGE = "RECEIVE_FRIDGE";

export const receiveFridges = (fridges) => ({
  type: RECEIVE_FRIDGES,
  fridges
});

export const receiveFridge = (fridge) => ({
  type: RECEIVE_FRIDGE,
  fridge
})

export const fetchUserFridges = (userId) => dispatch => 
  fridgeAPIUtil.fetchFridges(userId)
    .then(fridges => dispatch(receiveFridges(fridges)));

