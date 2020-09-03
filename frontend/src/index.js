import React from "react";
import ReactDOM from "react-dom";

// We will create this component shortly
import Root from "./components/root";

// We set this up in the last section
import configureStore from "./store/store";

// We will use this to parse the user's session token
import jwt_decode from "jwt-decode";

// The session utility we just created
import { setAuthToken } from "./util/session_api_util";

// We have not created this action yet, but will do so in the next step
import { logout } from "./actions/session_actions";

// For persisting state across browser refreshes
import { loadState, saveState } from './local_storage';
import throttle from 'lodash/throttle';

import * as fridgeItemsActions from './actions/fridge_items_actions';
import * as fridgeActions from './actions/fridge_actions';
import * as shoppingListActions from './actions/shopping_list_item_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  // load persisted entities from localStorage
  const persistedState = loadState();

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {
    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    if (persistedState) {
      persistedState.session = preloadedState.session;
      store = configureStore(persistedState);
    } else {
      store = configureStore(preloadedState);
    }

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    // If this is a first time user, start with just persisted state
    if (persistedState) {
      store = configureStore(persistedState);
    } else {
      store = configureStore({});
    }
  }

  store.subscribe(throttle(() => {
    saveState({
      entities: store.getState().entities
    });
  }, 1000));

  //FOR TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //fridge item actions
  window.requestFridgeItems = fridgeItemsActions.requestFridgeItems;
  window.removeFridgeItem = fridgeItemsActions.removeFridgeItem;
  window.addFridgeItem = fridgeItemsActions.addFridgeItem;
  window.editFridgeItemQuantity = fridgeItemsActions.editFridgeItemQuantity;

  //fridge actions
  window.fetchUserFridges = fridgeActions.fetchUserFridges;
  window.createFridge = fridgeActions.createFridge;
  window.leaveFridge = fridgeActions.leaveFridge;

  // shopping list actions
  window.requestShoppingListItems = shoppingListActions.requestShoppingListItems;
  window.toggleItemDone = shoppingListActions.toggleItemDone;
  window.removeShoppingListItem = shoppingListActions.removeShoppingListItem;
  window.addShoppingListItem = shoppingListActions.addShoppingListItem;
  window.editShoppingListItemQuantity = shoppingListActions.editShoppingListItemQuantity;
  // window.signup = signup;
  // window.login = login;

  // Render our root component and pass in the store as a prop
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});


// GOOGLE API!

