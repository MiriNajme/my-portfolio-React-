import { combineReducers } from "redux";
import { footerReducer } from "./footer/footer.reducer";

export const rootReducer = combineReducers({
  footer: footerReducer,
});
