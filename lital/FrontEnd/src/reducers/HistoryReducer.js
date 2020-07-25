import { GET_ALL_HISTORY, ADD_HISTORY } from "../Action/types";
const initialState = [];

export default function HistoryReducer(state = initialState, action) {
  if (action.type === GET_ALL_HISTORY) {
    return action.payload;
  }
  if (action.type === ADD_HISTORY) {
    return [action.payload, ...state];
  }

  return state;
}
