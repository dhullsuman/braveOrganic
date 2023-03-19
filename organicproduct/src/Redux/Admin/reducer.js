import {
    DELETE_PRODUCT,
   ADMIN_PRODUCT,
    SHOW_PRODUCT,
    SINGLE_PRODUCT,
    UPDATE_PRODUCT,
    ADMIN_ADD_PRODUCT,
    ADMIN_GET_ALL_USER,
  } from "./actionType"
  
  const initialValue = {
    adminProduct: [],
    adminallProduct: [],
    oneProduct: [],
    productData: {},
    adminaddProduct: {},
    product: 0,
    deletemsg: null,
    updatemsg: null,
  adminAlluser: [],
    msg:""
  };
  
  export const adminReducer = (
    state = initialValue,
    { type, payload }
  ) => {
    switch (type) {
      case SHOW_PRODUCT: {
        return {
          ...state,
          adminProduct: payload.product,
          product: payload.prod,
        };
      }
      case DELETE_PRODUCT: {
        return {
          ...state,
          deletemsg: payload.msg,
        };
      }
      case UPDATE_PRODUCT: {
        return {
          ...state,
          productData: payload.data,
          updatemsg: payload.msg,
        };
      }
      case SINGLE_PRODUCT: {
        return {
          ...state,
          oneProduct: payload.data,
        };
      }
      case ADMIN_PRODUCT: {
        return {
          ...state,
          adminallProduct: payload.product,
        };
      }
        
      case ADMIN_ADD_PRODUCT: {
        return {
          ...state,
          addProduct: payload.data,
          msg: payload.msg,
        };
      }
      case ADMIN_GET_ALL_USER: {
        return {
          ...state,
          adminAlluser: payload.user,
        };
      }
      default:
        return state;
    }
  };