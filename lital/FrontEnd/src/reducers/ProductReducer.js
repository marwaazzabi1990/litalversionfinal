import {
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../Action/types";
const initialState = [];

export default function ProductReducer(state = initialState, action) {
  if (action.type === GET_ALL_PRODUCTS) {
    return action.payload;
  }
  if (action.type === DELETE_PRODUCT) {
    return state.filter((product) => product.id !== action.payload);
  }
  if (action.type === EDIT_PRODUCT) {
    return action.payload;
  }
  return state;
}
