import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { ProductReducer } from "./Products/reducer"
import thunk from "redux-thunk"

const allReducers=combineReducers({ProductReducer})



export const store = legacy_createStore(allReducers, applyMiddleware(thunk))