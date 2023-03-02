import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Styles from "./Summery.module.css";
import { CiLocationOn } from "react-icons/ci";
import { TbDiscount2 } from "react-icons/tb";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { handleAddCart } from "../../Redux/cart/action";
import Address from "../addressPage/Address";
import { useState } from "react";
import { LoginUser } from "../Pages/users";

export default function Summery() {
  let { isUser,totalPrice } = useSelector((a) => {
    return {isUser: a.userReducer.isUser,totalPrice:a.cartReducer.totalPrice };
  }, shallowEqual);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState();
  const [show, setShow]= useState(false)

  useEffect(() => {
    LoginUser(dispatch, isUser._id);
  }, [isUser._id, isUser.cartItem?.length]);

  const proceedToPay = () => {
    dispatch(handleAddCart())
    return <Address/>
  }
  return (
    <VStack className={Styles.main} spacing={3}>
      <OrderSummery />
      <HStack className={Styles.btn} onClick={proceedToPay}>
        <Text as="h3">Proceed to Pay</Text>
        <span className={Styles.span}>{totalPrice}</span>
      </HStack>
    </VStack>
  );
}
