import { LoginAgain, LoginFailure, LoginRequest, LoginSuccessfull, LogOut, RegisterFailure, RegisterRequest, RegisterSuccessfull } from "./actionType";

export const handleRegisterSuccessfull=(a)=> {
    return {type:RegisterSuccessfull, payload:a}
}

export const handleRegisterRequest = () => {
    return {type:RegisterRequest}
}

export const handleRegisterFailure = () => {
    return {type:RegisterFailure}
}

export const handleLoginSuccessfull = (a) => {
    return {type:LoginSuccessfull, payload:a}
}
export const handleLoginAgain = (a) => {
    return {type:LoginAgain, payload:a}
}

export const handleLoginFailure = () => {
    return { type: LoginFailure }
}

export const handleLoginRequest = () => {
    return {type:LoginRequest}
}

export const handleLogOut = () => {
    return {type:LogOut}
}