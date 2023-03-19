import axios from "axios";
import {
  ADMIN_ADD_PRODUCT,
  ADMIN_DELETE_USER,
  ADMIN_GET_ALL_USER,
  ADMIN_PRODUCT,
  DELETE_PRODUCT,
  SHOW_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionType";

const mainUrl = "https://braveorganic.onrender.com/admin";
const token = JSON.parse(localStorage.getItem("brave_token"));
const config = {
  headers: {
    token: token,
  },
};
export const adminShowProducts = (page) => async (dispatch) => {
  try {
    let res = await axios.get(
      `${mainUrl}/product?page=${page}&limit=10`,
      config
    );
    dispatch({ type: SHOW_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.massage);
  }
};

// get all product
export const adminProduct = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/product`, config);
    dispatch({ type: ADMIN_PRODUCT, payload: res.data });
  } catch (error) {
    console.log({ error, msg: "error" });
  }
};
// delete product
export const adminDeleteProduct = (id, page) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/product/delete/${id}`, config);
    dispatch({ type: DELETE_PRODUCT, payload: res.data });
    dispatch(adminShowProducts(page));
  } catch (error) {
    console.log(error);
  }
};

// single product
export const adminSingleProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/product/${id}`, config);
    dispatch({ type: UPDATE_PRODUCT, payload: res.data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// update product
export const adminUpdateData = (id, data) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${mainUrl}/product/update/${id}`,
      data,
      config
    );
    dispatch({ type: UPDATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

//Add Products

export const addProduct = (product) => async (dispatch) => {
  try {
    let res = await axios.post(`${mainUrl}/product/add`, product, config);
    dispatch({ type: ADMIN_ADD_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.msg);
  }
};

//get all users
export const getAllUser = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/user`, config);
    dispatch({ type: ADMIN_GET_ALL_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

//delete users
export const adminDeleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}//user/delete/${id}`, config);
    dispatch({ type: ADMIN_DELETE_USER, payload: res.data });
    dispatch(getAllUser());
  } catch (error) {
    console.log(error);
  }
};
