import { ProductFailure, ProductRequest, NewArrivalProductSucessfull, BestProductSucessfull, ShopProductSucessfull } from "./actionType"

const initialState = {
    isError: false,
    isLoading: false,
    newProduct: [],
    bestProduct: [],
    shopProduct:[]
}

export const ProductReducer = (state=initialState, action) => {
    switch (action.type) {
        case ProductRequest: return { ...state, isLoading: true }
        case ProductFailure: return {...state, isLoading: false, isError: true}
        case NewArrivalProductSucessfull: return { ...state, isLoading: false, newProduct: action.payload }
        case BestProductSucessfull: return { ...state, isLoading: false, bestProduct: action.payload }
        case ShopProductSucessfull: return { ...state, isLoading: false, shopProduct: action.payload }
        default:return state
    }
}
