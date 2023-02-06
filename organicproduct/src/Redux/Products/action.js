import { ProductFailure, ProductRequest, NewArrivalProductSucessfull, ShopProductSucessfull, BestProductSucessfull, LandingProductSucessfull } from "./actionType"

const handleNewArrivalProaductSucessfull = (a) => {
    return {type:NewArrivalProductSucessfull, payload:a}
}
const handleBestProaductSucessfull = (a) => {
    return {type:BestProductSucessfull, payload:a}
}
const handleShopProaductSucessfull = (a) => {
    return {type:ShopProductSucessfull, payload:a}
}
const handleLandingProaductSucessfull = (a) => {
    return {type:LandingProductSucessfull, payload:a}
}
const handleProaductFailure = () => {
    return {type:ProductFailure}
}
const handleProaductRequest = () => {
    return {type:ProductRequest}
}

export{handleNewArrivalProaductSucessfull, handleProaductFailure, handleProaductRequest,handleBestProaductSucessfull, handleShopProaductSucessfull, handleLandingProaductSucessfull}