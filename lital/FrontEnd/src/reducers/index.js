import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import SessionReducer from "./SessionReducer";
import HistoryReducer from "./HistoryReducer";

const allReducers = combineReducers({
  user: UserReducer,
  products: ProductReducer,
  sessions: SessionReducer,
  history: HistoryReducer,
});

export default allReducers;
