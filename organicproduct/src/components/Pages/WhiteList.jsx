import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles/whiteList.module.css";
import { AddToCart, LoginUser } from "./users";

function WhiteListItem({ el, isLogin, dispatch, isUser }) {
  const [cart, setCart] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const RemoveWishlistItem = async (id, products) => {
    await axios.post(`http://localhost:8080/wishlist/delete/${id}`, products);
    LoginUser(dispatch, isUser._id);
    toast({
      title: "Remove Successfully",
      description: "From Wishlist",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (isUser != null) {
      const CartFilter = isUser.cartItem?.filter((elem) => elem._id === el._id);
      if (CartFilter?.length > 0) setCart(true);
      else setCart(false);
      LoginUser(dispatch, isUser._id);
    }
  }, [el.id, isUser.cartItem?.length]);

  return (
    <>
      <Box onClick={() => navigate(`/${"wishlist"}/${el._id}`)}>
        <Image src={el.img1} alt="image" />
      </Box>
      <Box>
        <Box>
          <Text as="h3" onClick={() => navigate(`/${"wishlist"}/${el._id}`)}>
            {el.title}
          </Text>
          <Text as="p">{el.desc}</Text>
          <Text as="p">Rs.{el.price}</Text>
        </Box>
        <Box>
          {cart ? (
            <Button onClick={() => navigate("/cart")}>GO TO CART</Button>
          ) : (
            <Button
              onClick={() =>
                AddToCart(isUser._id, {...el,qty:1}, setCart, toast, isLogin,dispatch)
              }
            >
              Add to Cart
            </Button>
          )}
          <Button onClick={() => RemoveWishlistItem(isUser._id, el, toast)}>
            Remove
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default function WhiteList() {
  let { isUser, isLogin } = useSelector((a) => {
    return { isLogin: a.userReducer.isLogin, isUser: a.userReducer.isUser };
  }, shallowEqual);
  isUser = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(isUser.wishList);
    LoginUser(dispatch, isUser._id);
  }, [isUser._id, isUser.wishList?.length]);

  return (
    <Box className={Styles.mainDiv}>
      <Box>
        <Text as="h1">MY FAVOURITES</Text>
      </Box>

      <SimpleGrid
        columns={[1, 2, 2, 3, 3]}
        width={{ base: "100%", sm: "90%", md: "100%", lg: "90%" }}
        p={{ base: "2vh 1vh", md: "3vh 1vh", lg: "3vh 0" }}
      >
        {data?.map((el) => (
          <Box className={Styles.whtList} key={el._id}>
            <WhiteListItem
              el={el}
              isLogin={isLogin}
              dispatch={dispatch}
              isUser={isUser}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
