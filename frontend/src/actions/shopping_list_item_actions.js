import * as shoppingListItemAPIUtil from '../util/shopping_list_item_util';

export const RECEIVE_SHOPPING_LIST_ITEMS = "RECEIVE_SHOPPING_LIST_ITEMS";

const receiveShoppingListItems = (shoppingListItems) => ({
  type: RECEIVE_SHOPPING_LIST_ITEMS,
  shoppingListItems
});

export const requestShoppingListItems = () => (dispatch) =>
  shoppingListItemAPIUtil.getShoppingListItems()
    .then((shoppingListItems) => dispatch(receiveShoppingListItems(shoppingListItems)));
