import { combineReducers } from "redux";
import pageNation from "./pageNation";
import login from "./login";
import shopBasket from "./shopBasket";

const rootReducer = combineReducers({
  pageNation,
  login,
  shopBasket,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
