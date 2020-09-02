import * as shoppingListItemAPIUtil from '../util/shopping_list_item_util';

export const RECEIVE_SHOPPING_LIST_ITEMS = "RECEIVE_SHOPPING_LIST_ITEMS";

const receiveShoppingListItems = (shoppingListItems) => ({
  type: RECEIVE_SHOPPING_LIST_ITEMS,
  shoppingListItems
});

export const requestShoppingListItems = (userId) => (dispatch) =>
  shoppingListItemAPIUtil.getShoppingListItems(userId)
    .then((shoppingListItems) => dispatch(receiveShoppingListItems(shoppingListItems)));

export const toggleItemDone = (userId, listItemId) => (dispatch) =>
  shoppingListItemAPIUtil.editShoppingList(userId, { listItemId, toggle: true })
    .then((shoppingListItems) => dispatch(receiveShoppingListItems(shoppingListItems)));

export const removeShoppingListItem = (userId, listItemId) => (dispatch) =>
  shoppingListItemAPIUtil.editShoppingList(userId, { listItemId })
    .then((shoppingListItems) => dispatch(receiveShoppingListItems(shoppingListItems)));

// itemData should contain keys name, category, and imageUrl
// NOTE: this will fail if validations fail
export const addShoppingListItem = (userId, itemData) => (dispatch) =>
  shoppingListItemAPIUtil.editShoppingList(userId, itemData)
    .then((shoppingListItems) => dispatch(receiveShoppingListItems(shoppingListItems)));

