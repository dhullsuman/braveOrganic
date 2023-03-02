import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { MdLocationOn } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { handleAddCart } from '../../Redux/cart/action'
import Cod from './Cod'
import MainScreen from './MainScreen'
import Styles from "./paymentItem.module.css"

export default function PaymentItem() {
    const dispatch = useDispatch();
    const [credit, setCredit] = useState(false)
    const [cod, setCod]= useState(true)
  return (
    <Box className={Styles.main}>
          <Box className={Styles.main1}>
              <HStack>
                  <Text as="p">Delivery Address</Text>
                  <Text as="p" onClick={()=>dispatch(handleAddCart())}>Change</Text>
              </HStack>
              <HStack>
                  <HStack>
                      <MdLocationOn />
                      <Text as="p">Home</Text>
                  </HStack>
                  <Text as="p">H.No.689, street 11, jind, JIND, HARYANA, 126116, Phone: 7988376352</Text>
              </HStack>
          </Box>
          <Box className={Styles.main2}>
              <Text as="p">Payment Method</Text>
              <HStack>
                  <Button onClick={() => { setCredit(true);  setCod(false)}}>Credit/Debit Card</Button>
                  <Button onClick={() => { setCod(true);  setCredit(false)}}>Cash On Delivery</Button>
              </HStack>
              {credit && <MainScreen />}
              {cod && <Cod/>}
          </Box>
    </Box>
  )
}
