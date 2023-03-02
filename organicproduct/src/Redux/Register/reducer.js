import { LoginAgain, LoginFailure, LoginRequest, LoginSuccessfull, LogOut, RegisterFailure, RegisterRequest, RegisterSuccessfull } from "./actionType"
const userData = JSON.parse(localStorage.getItem("user")) || {}
const Token = JSON.parse(localStorage.getItem("token"))|| ""
const isLogin = localStorage.getItem("isLogin")|| false
const initialState = {
    isLoading: false,
    isError: false,
    isRegister: "",
    isToken:Token ,
    isUser: userData,
    isLogin: isLogin,
}
export const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case RegisterRequest || LoginRequest: return { ...state, isLoading: true }
        case RegisterFailure || LoginFailure: return { ...state, isLoading: false, isError: true }
        case RegisterSuccessfull: return { ...state, isLoading: false, isRegister: action.payload }
        case LoginSuccessfull: return { ...state, isLogin: action.payload.isLogin, isLoading: false, isToken: action.payload.Token, isUser: action.payload.user }
        case LogOut: return { ...state, isToken: "", isUser: {}, isLogin: false };
        case LoginAgain:return {...state,isUser:action.payload.user,isLoading:false,isLogin:action.payload.isLogin}
        default: return state
    }
}