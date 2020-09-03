import * as fridgeItemAPIUtil from '../util/fridge_item_util';

export const RECEIVE_FRIDGE_ITEMS = "RECEIVE_FRIDGE_ITEMS";
export const RECEIVE_FRIDGE_ITEMS_ERRORS = "RECEIVE_FRIDGE_ITEMS_ERRORS";

const receiveFridgeItems = (fridgeItems) => ({
  type: RECEIVE_FRIDGE_ITEMS,
  fridgeItems
});

export const receiveErrors = (errors) => {
  
  return {
  type: RECEIVE_FRIDGE_ITEMS_ERRORS,
  errors,
}};

export const requestFridgeItems = (fridgeId) => (dispatch) =>
  fridgeItemAPIUtil.getFridgeItems(fridgeId)
    .then((fridge) => dispatch(receiveFridgeItems(fridge.data.fridgeContainer)));

export const removeFridgeItem = (fridgeId, fridgeItemId) => (dispatch) =>
  fridgeItemAPIUtil.editFridgeItem(fridgeId, { fridgeItemId })
    .then((fridge) => dispatch(receiveFridgeItems(fridge.data.fridgeContainer)));

// itemData should contain keys name, category, owner, quantity, expirationDate and imageUrl
export const addFridgeItem = (fridgeId, itemData) => (dispatch) =>
  fridgeItemAPIUtil
    .editFridgeItem(fridgeId, itemData)
    .then((fridge) => dispatch(receiveFridgeItems(fridge.data.fridgeContainer)))
    .catch((err) => {
      dispatch(receiveErrors(err.response.data));
    });

//itemData should contain keys fridgeItemId and quantity
export const editFridgeItemQuantity = (fridgeId, itemData) => (dispatch) =>
  fridgeItemAPIUtil.editFridgeItem(fridgeId, itemData)
    .then((fridge) => dispatch(receiveFridgeItems(fridge.data.fridgeContainer)));