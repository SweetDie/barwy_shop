import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { productReducer } from "../components/home/store/productReducer";
import { authReducer } from "../components/auth/store/authReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
