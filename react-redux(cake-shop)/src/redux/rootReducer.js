import userReducer from "./users/userReducer";
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import donutReducer from "./donut/donutReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  donut: donutReducer,
  user: userReducer,
});
