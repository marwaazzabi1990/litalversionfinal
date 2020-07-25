import { ADD_SESSION } from "../Action/types";
const initialState = [];

export default function ProductReducers(state = initialState, action) {
  if (action.type === ADD_SESSION) {
    return action.payload;
  }

  return state;
}
