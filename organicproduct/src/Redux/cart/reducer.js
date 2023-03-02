import { AddAddress, AddCart, TotalItems, TotalWishtList } from "./actionType";

const initialState = {
  onCart: false,
  onAdd: false,
  totalCart: 0,
  totalPrice: 0,
  totalMRP: 0,
  totalWishList: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddCart:
      return { ...state, onCart: true, onAdd: false };
    case AddAddress:
      return { ...state, onAdd: true, onCart: true };
    case TotalItems:
      return {
        ...state,
        totalCart: action.payload.totalcart,
        totalPrice: action.payload.totalPrice,
        totalMRP: action.payload.totalMRP,
      };
    case TotalWishtList:
      return { ...state, totalWishList: action.payload.totalWisht };
    default:
      return state;
  }
};
