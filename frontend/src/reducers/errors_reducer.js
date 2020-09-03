import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import FridgeItemsErrorsReducer from "./fridge_items_errors_reducer"; 


export default combineReducers({
  session: SessionErrorsReducer,
  fridgeItems: FridgeItemsErrorsReducer,
  
});
