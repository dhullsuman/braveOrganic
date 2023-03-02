import { Box, Button, Flex, HStack, Image, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Styles from "./CartItem.module.css";
import {RiDeleteBin6Line} from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AddToFavourites, ChangeQuentity, LoginUser, RemoveWishlistItem } from "../Pages/users";
import { useDispatch } from "react-redux";
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
export default function CartItem({data,id,isLogin,isUser }) {
  const [quantity, setQuantity] = useState(data.qty);
  const [wisht, setWisht] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const RemoveCart = async (id, products) => {
    await axios.post(`http://localhost:8080/cart/delete/${id}`, products);
    LoginUser(dispatch,id)
    toast({
      title: "Remove Successfully",
      description:"From Cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (isUser != null) {
      const CartFilter = isUser.wishList?.filter((elem) => elem._id === data._id);
      if (CartFilter?.length > 0) setWisht(true);
      else setWisht(false);
      LoginUser(dispatch, isUser._id);
    }
  }, [data.id, isUser.wishList?.length]);

  return (
    <Flex className={Styles.main}>
      <VStack className={Styles.main1}>
        <Image src={data.img1} alt={data.title} onClick={() => navigate(`/${"wishlist"}/${data._id}`)} />
      </VStack>
      <Box className={Styles.main2}>
        <Text as="h3" onClick={() => navigate(`/${"wishlist"}/${data._id}`)}>{data.title}</Text>
        <Text as="h3">{data.desc}</Text>
          <HStack>
          <Text as="h3">Price : ₹{Number(data.price)*quantity}</Text>
          <Text as="h3">{data.Off} OFF</Text>
          </HStack>
        <Text as="h3">MRP : <span className={Styles.mrp}>₹{data.origionalPrice}</span></Text>
        <Flex>
          <Button onClick={()=>ChangeQuentity(isUser._id,data,setQuantity,quantity,-1,dispatch)} isDisabled={quantity===1?true:false}>-</Button>
          <Button>{quantity }</Button>
          <Button onClick={()=>ChangeQuentity(isUser._id,data,setQuantity,quantity,1,dispatch)} isDisabled={quantity>=5?true:false}>+</Button>
        </Flex>
      </Box>
      <Box className={Styles.main3}>
        <RiDeleteBin6Line onClick={()=>RemoveCart(id,data)} color="red"/>
        {!wisht ?
          <BiHeart className={Styles.heart} onClick={() => AddToFavourites(id,data,setWisht,toast,isLogin,dispatch)} color="rgb(59,77,62)"/> :
          <AiFillHeart className={Styles.heart} onClick={() => RemoveWishlistItem(id, data, setWisht, toast, dispatch)} color="rgb(59,77,62)"/>
        }
      </Box>
    </Flex>
  );
}
