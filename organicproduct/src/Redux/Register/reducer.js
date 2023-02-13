import { LoginFailure, LoginRequest, LoginSuccessfull, LogOut, RegisterFailure, RegisterRequest, RegisterSuccessfull } from "./actionType"
const userData = JSON.parse(localStorage.getItem("user"))||{Token: "", user:{}, isLogin: false}
const initialState = {
    isLoading: false,
    isError: false,
    isRegister: "",
    isToken: userData.Token ,
    isUser: userData.user,
    isLogin: userData.isLogin,
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case RegisterRequest || LoginRequest: return { ...state, isLoading: true }
        case RegisterFailure || LoginFailure: return { ...state, isLoading: false, isError: true }
        case RegisterSuccessfull: return { ...state, isLoading: false, isRegister: action.payload }
        case LoginSuccessfull: return { ...state, isLogin: action.payload.isLogin, isLoading: false, isToken: action.payload.Token, isUser: action.payload.user }
        case LogOut: return {...state, isToken:"", isUser:{}, isLogin:false}
        default: return state
    }
}