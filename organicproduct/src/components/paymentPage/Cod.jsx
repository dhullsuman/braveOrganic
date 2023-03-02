import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./cod.module.css";

export default function Cod() {
  const navigate = useNavigate();
  const OrderConfirm = () => {
    alert("Order confirmed successfully");
    navigate("/order");
  };
  return (
    <>
      <Box className={Styles.main}>
        <HStack>
          <Image
            src="https://static1.hkrtcdn.com/hknext/static/media/payment/cod-inner.svg"
            alt="COD"
          />
          <Text as="p">CASH ON DELIVERY</Text>
        </HStack>
        <Box>
          <Text as="p">You will not able to return product in COD</Text>
        </Box>
      </Box>
      <Button
        className={Styles.btn}
        colorScheme="rgb(59, 77, 62)"
        onClick={OrderConfirm}
      >
        Confirm Order
      </Button>
    </>
  );
}
