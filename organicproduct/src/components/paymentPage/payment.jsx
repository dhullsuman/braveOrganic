import { Box } from '@chakra-ui/react'
import React from 'react'
import OrderSummery from '../cartPage/OrderSummery'
import PaymentItem from './paymentItem'

export default function Payment() {
  return (
    <Box display="flex" width="80%" margin="auto" p="2vh 0" gap={10}>
          <Box width="70%">
          <PaymentItem />
          </Box>
          <Box width="30%">
          <OrderSummery/>
          </Box>
      </Box>
  )
}
