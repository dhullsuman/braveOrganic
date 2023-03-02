import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from "./CartFooter.module.css"

export default function CartFooter() {
  return (
      <Flex className={Styles.footer}  w="100%">
          <Text fontSize={"sm"}>Copyright © , HealthKart.com, or its affiliates</Text>
          <Flex>
      <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay1.svg' alt='upi'/>
      <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay2.svg' alt='visa'/>
      <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay3.svg' alt='masterCard'/>
      <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay4.svg' alt='netBanking'/>
      <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay5.svg' alt='EMI'/>
      <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay6.svg' alt='COD'/>
              
          </Flex>
    </Flex>
  )
}
