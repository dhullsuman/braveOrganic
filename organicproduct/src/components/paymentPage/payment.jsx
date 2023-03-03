import { Box } from '@chakra-ui/react'
import React from 'react'
import OrderSummery from '../cartPage/OrderSummery'
import PaymentItem from './paymentItem'

export default function Payment() {
  return (
    <Box display="flex" width={{lg:"80%", md:"90%", base:"100%"}} margin="auto" p="2vh 0"  flexDirection={{lg:"row", md:"column", base:"column"}} gap={{lg:10}}>
          <Box width={{lg:"70%", md:"100%", base:"100%"}}>
          <PaymentItem />
          </Box>
          <Box width={{lg:"30%", md:"100%", base:"100%"}} mt={{lg:0, md:"2vh", base:"2vh"}}>
          <OrderSummery/>
          </Box>
      </Box>
  )
}
