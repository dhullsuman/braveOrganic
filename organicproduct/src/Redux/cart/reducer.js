import { AddAddress, AddCart, CartReset, TotalItems, TotalPrice, TotalWishtList } from "./actionType";

const initialState = {
  onCart: false,
  onAdd: false,
  totalCart: 0,
  totalPrice: 0,
  totalMRP: 0,
  totalWishList: 0,
};
export const cartReducer = (state = initialState, action) => {
  // console.log(state.onAdd)
  switch (action.type) {
    case AddCart:
      return { ...state, onCart: true, onAdd: false };
    case AddAddress:
      return { ...state, onAdd: true, onCart: true };
    case CartReset:return {...state,onAdd:false,onCart:false}
    case TotalItems:
      return {
        ...state,
        totalCart: action.payload.totalcart,
      };
    case TotalPrice:
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        totalMRP: action.payload.totalMRP,
      };
    case TotalWishtList:
      return { ...state, totalWishList: action.payload.totalWisht };
    default:
      return state;
  }
};
