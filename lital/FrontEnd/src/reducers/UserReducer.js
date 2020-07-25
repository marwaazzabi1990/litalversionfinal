import { ADD_USER, DELETE_USER, GET_ALL_USER } from "../Action/types";
const initialState = [];
export default function UserReducer(state = initialState, action) {
  if (action.type === GET_ALL_USER) {
    return action.payload;
  }
  if (action.type === ADD_USER) {
    return [action.payload, ...state];
  }
  if (action.type === DELETE_USER) {
    return state.filter((user) => user.id !== action.payload);
  }

  return state;
}
