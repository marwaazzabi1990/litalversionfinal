import { GET_ALL_PRODUCTS, EDIT_PRODUCT, ADD_PRODUCT } from "./types";
import Axios from "axios";

// Get all Product from Api to Store
export const getAllproducts = (payload) => ({
  type: GET_ALL_PRODUCTS,
  payload,
});

export function getProductsFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:2000/lital/product/getallproducts").then(
      (res) => {
        dispatch(getAllproducts(res.data));
      }
    );
}

// Edit product

export const Editproduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export function EditProductInApi(el, id) {
  console.log(el.quantity, id);
  return (dispatch) =>
    Axios.put(
      "http://localhost:2000/lital/product/updateproduct/" + id,
      el
    ).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
}

// Delete Product from Api

export const Addproduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export function AddProductInApi(product) {
  console.log(product);
  return (dispatch) =>
    Axios.post("http://localhost:2000/lital/product/addproduct", product).then(
      (res) => {
        dispatch(Addproduct(res.data));
        window.location.reload();
      }
    );
}
