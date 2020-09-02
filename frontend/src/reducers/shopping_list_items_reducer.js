import { RECEIVE_SHOPPING_LIST_ITEMS} from "../actions/shopping_list_item_actions";

const shoppingListItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_SHOPPING_LIST_ITEMS:
      return action.shoppingList.data;
    default:
      return oldState;
  }
}

export default shoppingListItemsReducer; 