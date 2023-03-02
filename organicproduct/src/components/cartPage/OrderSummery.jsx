import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../Pages/users';
import Styles from "./Summery.module.css";


export default function OrderSummery() {
  let { isUser,totalPrice,totalCart,totalMRP } = useSelector((a) => {
    return {isUser: a.userReducer.isUser,totalPrice:a.cartReducer.totalPrice,totalCart:a.cartReducer.totalCart,totalMRP:a.cartReducer.totalMRP };
  }, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    LoginUser(dispatch, isUser._id);
  }, [isUser._id, isUser.cartItem?.length]);
  return (
    <VStack className={Styles.main3}>
        <HStack>
          <Text as="h2">Order Summary </Text>
          <Text as="h4">
            ( {totalCart} Items)
          </Text>
        </HStack>
        <HStack>
          <Text as="h3">Total MRP</Text>
          <Text as="h4">₹ {totalMRP}</Text>
        </HStack>
        <HStack>
          <Text as="h3">Total Discounts</Text>
          <Text as="h4">-₹{totalMRP-totalPrice}</Text>
        </HStack>
              <HStack>
                  <Text as="h3">Shipping Charges</Text>
                  <Text as="h4">FREE</Text>
        </HStack>
    <Box id={Styles.line}></Box>
              <HStack>
                  <Text as="h3">Payable Amount</Text>
                  <Text as="h4">₹ {totalPrice }</Text>
              </HStack>
      </VStack>
  )
}