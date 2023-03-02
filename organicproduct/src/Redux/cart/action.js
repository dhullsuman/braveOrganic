import { AddAddress, AddCart, TotalItems, TotalWishtList } from "./actionType"

const handleAddCart=()=>{
    return {type:AddCart}
}
const handleAddAddress = () => {
    return {type:AddAddress}
}

const handleTotalItems = (payload) => {
    return {type:TotalItems,payload}
}

const handleTotalWishtlist = (payload) => {
    return {type:TotalWishtList,payload}
}

export {handleAddAddress, handleAddCart,handleTotalItems,handleTotalWishtlist}