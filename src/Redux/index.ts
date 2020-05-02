import { combineReducers } from "redux";
import pageNation from "./pageNation";
import login from "./login";

const rootReducer = combineReducers({
  pageNation,
  login,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
