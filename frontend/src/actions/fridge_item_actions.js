import * as fridgeItemAPIUtil from "../util/fridge_item_util";

export const RECEIVE_FRIDGE_ITEMS = "RECEIVE_FRIDGE_ITEMS";

const receiveFridgeItems = (fridgeItems) => ({
  type: RECEIVE_FOOD_ITEMS,
  fridgeItems,
});

export const requestFridgeItems = () => (dispatch) =>
  fridgeItemAPIUtil
    .getFridgeItems()
    .then((fridgeItems) => dispatch(receiveFridgeItems(fridgeItems)));
