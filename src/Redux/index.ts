import { combineReducers } from "redux";
import pageNation from "./pageNation";
import login from "./login";
import shopBasket from "./shopBasket";
import shopInfo from "./shopInfo";

const rootReducer = combineReducers({
  pageNation,
  login,
  shopBasket,
  shopInfo,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
