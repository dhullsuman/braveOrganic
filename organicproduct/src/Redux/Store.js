import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import { ProductReducer } from "./Products/reducer"
import thunk from "redux-thunk"
import { userReducer } from "./Register/reducer"
import {cartReducer} from "./cart/reducer.js"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({ ProductReducer, userReducer,cartReducer})




export const store = legacy_createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))