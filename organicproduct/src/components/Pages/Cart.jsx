import { Box } from '@chakra-ui/react'
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Address from '../addressPage/Address';
import Carts from '../cartPage/Cart';
import CartNavbar from '../cartPage/CartNavbar';
import Payment from '../paymentPage/payment';

export default function Cart() {
  const { onCart, onAdd, totalCart } = useSelector((b) => { return { onCart: b.cartReducer.onCart, onAdd: b.cartReducer.onAdd,totalCart:b.cartReducer.totalCart, totalCart:b.cartReducer.totalCart } }, shallowEqual);
  return (
    <Box>
      {totalCart>0&&
        <CartNavbar />}
      {
      onAdd && onCart ? <Payment/>: onCart ? <Address/> :<Carts />}
    </Box>
  )
}
