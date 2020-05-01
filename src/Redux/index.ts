import { combineReducers } from "redux";
import reduce from "./reducer";

const rootReducer = combineReducers({
  reduce,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
