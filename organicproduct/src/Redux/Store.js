import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { ProductReducer } from "./Products/reducer"
import thunk from "redux-thunk"
import { userReducer } from "./Register/reducer"

const allReducers = combineReducers({ ProductReducer, userReducer})




export const store = legacy_createStore(allReducers, applyMiddleware(thunk))