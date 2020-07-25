import { ADD_USER, DELETE_USER, GET_ALL_USER, MODIF_USER } from "./types";
import Axios from "axios";
/* get all USER */

export const getAllUser = (payload) => ({
  type: GET_ALL_USER,
  payload,
});

export function getUserFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:2000/lital/user/getallusers").then((res) => {
      dispatch(getAllUser(res.data));
    });
}
/*modif user*/
export const ModifierUser = (payload) => ({
  type: MODIF_USER,
  payload,
});
export function modifUserFromApi(data) {
  let id = data.id;
  let a = data.first_name;
  let b = data.last_name;
  let c = data.user_name;
  let d = data.password;
  let e = data.email;
  let f = data.post;
  return (dispatch) =>
    Axios.put(`http://localhost:2000/lital/user/updateuser/${id}`, {
      first_name: a,
      last_name: b,
      user_name: c,
      password: d,
      email: e,
      post: f,
    }).then((res) => {
      dispatch(ModifierUser(res.data));
      window.location.reload();
    });
}

/* add  USER */
export const AddUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function addUserFromApi(data) {
  return (dispatch) =>
    Axios.post("http://localhost:2000/lital/user/adduser", data).then((res) => {
      dispatch(AddUser(res.data));
      window.location.reload();
    });
}
/*delette USER */

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});
export function deleteUserToApi(id) {
  return (dispatch) =>
    Axios.delete(`http://localhost:2000/lital/user/deleteuser/${id}`).then(
      (res) => {
        dispatch(deleteUser(res.data));
        window.location.reload(false);
      }
    );
}
