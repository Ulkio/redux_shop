import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./cart/reducer";
import itemsReducer from "./items/reducer";

const rootReducer = combineReducers({
  cartReducer,
  itemsReducer,
});
const composedEnhanced = composeWithDevTools(applyMiddleware(thunk));

const store = legacy_createStore(rootReducer, {}, composedEnhanced);

export default store;
