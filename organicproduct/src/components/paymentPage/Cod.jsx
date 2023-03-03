import { Box, Button, HStack, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../Pages/users";
import Styles from "./cod.module.css";

export default function Cod() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isUser } = useSelector((a) => a.userReducer);
  const OrderConfirm = async (id, data) => {
    try {
      await axios.post(`http://localhost:8080/order/add/${id}`, data);
      LoginUser(dispatch, isUser._id);
      toast({
        title: "Order confirmed successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/order");
    } catch (err) {
      console.log(err);
    }
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
        onClick={() => OrderConfirm(isUser._id, isUser.cartItem)}
      >
        Confirm Order
      </Button>
    </>
  );
}
