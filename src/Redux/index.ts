import { combineReducers } from "redux";
import reduce from "./reducer";
import login from "./login";

const rootReducer = combineReducers({
  reduce, login, 
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
