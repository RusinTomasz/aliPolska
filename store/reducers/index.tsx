import { combineReducers } from "redux";
import { postReducer, PostState } from "./postReducer";

export interface State {
  post?: PostState;
}

export default combineReducers({
  post: postReducer,
});
