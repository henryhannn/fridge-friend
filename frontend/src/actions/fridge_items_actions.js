import * as fridgeItemAPIUtil from '../util/fridge_item_util';

export const RECEIVE_FRIDGE_ITEMS = "RECEIVE_FRIDGE_ITEMS";

const receiveFridgeItems = (fridgeItems) => ({
  type: RECEIVE_FRIDGE_ITEMS,
  fridgeItems
});

export const requestFridgeItems = (fridgeId) => (dispatch) =>
  fridgeItemAPIUtil.getFridgeItems(fridgeId)
    .then((fridge) => dispatch(receiveFridgeItems(fridge.fridgeContainer)));

export const removeFridgeItem = (fridgeId, fridgeItemId) => (dispatch) =>
  fridgeItemAPIUtil.editFridgeItem(fridgeId, { fridgeItemId })
    .then((fridgeItems) => dispatch(receiveFridgeItems(fridgeItems)));

// itemData should contain keys name, category, owner, quantity, expirationDate and imageUrl
export const addFridgeItem = (fridgeId, itemData) => (dispatch) =>
  fridgeItemAPIUtil.editFridgeItem(fridgeId, itemData)
    .then((fridgeItems) => dispatch(receiveFridgeItems(fridgeItems)));

//itemData should contain keys fridgeItemId and quantity
export const editFridgeItemQuantity = (fridgeId, itemData) => (dispatch) =>
  fridgeItemAPIUtil.editFridgeItem(fridgeId, itemData)
    .then((fridgeItems) => dispatch(receiveFridgeItems(fridgeItems)));