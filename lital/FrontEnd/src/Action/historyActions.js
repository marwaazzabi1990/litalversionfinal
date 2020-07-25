import { GET_ALL_HISTORY, ADD_HISTORY } from "./types";
import Axios from "axios";

// Get all historic from Api to Store
export const getAllHistory = (payload) => ({
  type: GET_ALL_HISTORY,
  payload,
});

export function getAllHistoryFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:2000/lital/history/getallhistory").then((res) =>
      dispatch(getAllHistory(res.data))
    );
}

/* add  History */
export const AddHistory = (payload) => ({
  type: ADD_HISTORY,
  payload,
});

export function addHistoryInApi(element) {
  return (dispatch) =>
    Axios.post("http://localhost:2000/lital/history/addhistory", element).then(
      (res) => {
        dispatch(AddHistory(res.data));
        console.log(res.data);
      }
    );
}
