import { Box } from '@chakra-ui/react'
import React from 'react'
import OrderSummery from '../cartPage/OrderSummery'
// import { shallowEqual, useSelector } from 'react-redux'
// import CartFooter from '../CartPage/CartFooter'
// import CartNavbar from '../CartPage/CartPageNav'
// import OrderSummery from '../CartPage/OrderSummery'
import AddressItem from './addressItem'
// import {useNavigate} from "react-router-dom"
// import Cart from '../Cart'
// import OrderSummery from '../CartPage/OrderSummery'
// import Cart from '../Pages/Cart'
// import Cart from '../CartPage/Cart'


export default function Address() {
  // const navigate = useNavigate();
  // const cartData = useSelector((store) => store.CartReducer);

  return (
      <Box display="flex" width="80%" margin="auto" p="2vh 0" gap={10}>
          <Box width="70%">
          <AddressItem />
          </Box>
          <Box width="30%">
          <OrderSummery/>
          </Box>
      </Box>
  )
}
