import { ProductFailure, ProductRequest, NewArrivalProductSucessfull, BestProductSucessfull, ShopProductSucessfull, LandingProductSucessfull } from "./actionType"

const initialState = {
    isError: false,
    isLoading: false,
    newProduct: [],
    bestProduct: [],
    shopProduct: [],
    landingProduct:[]
}

export const ProductReducer = (state=initialState, action) => {
    switch (action.type) {
        case ProductRequest: return { ...state, isLoading: true }
        case ProductFailure: return {...state, isLoading: false, isError: true}
        case NewArrivalProductSucessfull: return { ...state, isLoading: false, newProduct: action.payload }
        case BestProductSucessfull: return { ...state, isLoading: false, bestProduct: action.payload }
        case ShopProductSucessfull: return { ...state, isLoading: false, shopProduct: action.payload }
        case LandingProductSucessfull: return { ...state, isLoading: false, landingProduct: action.payload }
        default:return state
    }
}
