import {
    LoginAgain,
    LoginFailure,
    LoginRequest,
    LoginSuccessfull,
    LogOut,
    RegisterFailure,
    RegisterRequest,
    RegisterSuccessfull,
  } from "./actionType";
  const userData = JSON.parse(localStorage.getItem("brave_user")) || {};
  const Token = JSON.parse(localStorage.getItem("brave_token")) || "";
  const isLogin = localStorage.getItem("brave_isLogin") || false;
  const isAuth = localStorage.getItem("brave_isAuth") || false;
  const initialState = {
    isAuth: isAuth,
    isLoading: false,
    isError: false,
    isRegister: "",
    isToken: Token,
    isUser: userData,
    isLogin: isLogin,
  };
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case RegisterRequest || LoginRequest:
        return { ...state, isLoading: true };
      case RegisterFailure || LoginFailure:
        return { ...state, isLoading: false, isError: true };
      case RegisterSuccessfull:
        return { ...state, isLoading: false, isRegister: action.payload };
      case LoginSuccessfull:
        return {
          ...state,
          isLogin: action.payload.isLogin,
          isLoading: false,
          isToken: action.payload.Token,
          isUser: action.payload.user,
          isAuth: action.payload.isAuth,
        };
      case LogOut:
        return {
          ...state,
          isToken: "",
          isUser: {},
          isLogin: false,
          isAuth: false,
        };
      case LoginAgain:
        return {
          ...state,
          isUser: action.payload.user,
          isLoading: false,
          isLogin: action.payload.isLogin,
          isAuth: action.payload.isAuth,
        };
      default:
        return state;
    }
  };