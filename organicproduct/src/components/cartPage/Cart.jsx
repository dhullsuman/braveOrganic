import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleCartReset } from "../../Redux/cart/action";
import { LoginUser } from "../Pages/users";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Summery from "./Summery";


export default function Carts() {
  let { isUser, isLogin,totalCart } = useSelector((a) => {
    return { isLogin: a.userReducer.isLogin, isUser: a.userReducer.isUser,totalCart:a.cartReducer.totalCart };
  }, shallowEqual);
  isUser = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(isUser.cartItem);
    LoginUser(dispatch, isUser._id);
    dispatch(handleCartReset());


  }, [isUser._id, isUser.cartItem?.length]);
  return (
    <Box w={{lg:"80%",md:"95%",base:"90%"}} display={{lg:"flex",md:"flex",base:"block"}} margin="auto"  gap={6} padding="1.5rem 0" justifyContent={"center"} >
      {totalCart <= 0 ? <Box display="flex" alignItems="center" flexDirection="column"> <Image src="https://moein.video/wp-content/uploads/2021/12/Shopping-Cart-GIF-Royalty-Free-Animated-Icon-350px-after-effects-project.gif" alt="" />
        <Button w="fit-content" margin="auto" color="white" bg="rgb(59,77,62)" colorScheme="rgb(59,77,62)">
        <Link to="/shopall">Continue Shopping</Link>
      </Button>
        </Box>: <>
      <Stack className={Styles.main}>
      <HStack className={Styles.main1}>
        <Text as="h4">Shopping Cart ({totalCart} item)</Text>
        <Link to="/wishlist">My Wishlist</Link>
      </HStack>
        <Box className={Styles.main2}>
          {data?.map(el =>
            <CartItem key={el._id} data={el} id={isUser._id} isUser={ isUser}  isLogin={ isLogin} />)}
      </Box>
      <HStack className={Styles.main3}>
        <Link to="/shopall">Continue Shopping</Link>
      </HStack>
      </Stack>
        <Summery />
        </>
          }
    </Box>
  );
}

