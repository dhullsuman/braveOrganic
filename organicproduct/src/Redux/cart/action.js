import { AddAddress, AddCart, CartReset, TotalItems, TotalPrice, TotalWishtList } from "./actionType"

const handleAddCart=()=>{
    return {type:AddCart}
}
const handleAddAddress = () => {
    return {type:AddAddress}
}
const handleCartReset = () => {
    return {type:CartReset}
}

const handleTotalItems = (payload) => {
    return {type:TotalItems,payload}
}
const handleTotalPrice = (payload) => {
    return {type:TotalPrice,payload}
}

const handleTotalWishtlist = (payload) => {
    return {type:TotalWishtList,payload}
}

export {handleAddAddress, handleAddCart,handleTotalItems,handleTotalWishtlist,handleCartReset,handleTotalPrice}