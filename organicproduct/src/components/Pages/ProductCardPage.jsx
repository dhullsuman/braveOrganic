import React, { useEffect, useRef, useState } from "react";
import Styles from "../Styles/Items.module.css"
import {AiFillHeart} from "react-icons/ai"
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text,useToast } from "@chakra-ui/react";
import axios from "axios";
import { useSelector,shallowEqual, useDispatch } from "react-redux";
import { AddToCart, AddToFavourites, LoginUser, RemoveWishlistItem } from "./users";

export default function ProductCardPage({ itemsData, cat }) {
  const { isUser,isLogin } = useSelector((a) => { return { isLogin: a.userReducer.isLogin, isUser: a.userReducer.isUser } }, shallowEqual);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wisht, setWisht] = useState(false);
  const [cart, setCart] = useState(false);
  const toast = useToast();
  function onHover(){
    ref.current.src=itemsData.img2;
  }
  function outHover(){
    ref.current.src=itemsData.img1;
  }

useEffect(() => {
  if (isUser != null) {
    const Filter = isUser.wishList?.filter((el) => el._id === itemsData._id);
    const CartFilter = isUser.cartItem?.filter((elem) => elem._id === itemsData._id);
    if (CartFilter?.length > 0) setCart(true);
    else setCart(false);
    if (Filter?.length > 0) setWisht(true);
    else setWisht(false);
    LoginUser(dispatch, isUser._id);
  }
  // getArrivalData();
}, [itemsData.id, isUser.wishList?.length,isUser.cartItem?.length]);
  return (
    <Box id={cat==="home" ? Styles.main:""} className={Styles.main} onMouseOver={onHover} onMouseOut={outHover} >
      <Box>
        <img src={itemsData.img1} alt="pic1" ref={ref} onClick={()=>navigate(`/${cat}/${itemsData._id}`)}/>
        <Box>
          <Box>
            {itemsData.subCat === "best" && <><Text as="p">#1</Text>
            <Text as="p">BEST SELLER</Text></>}
          </Box>
            <Box>
                <Text as="p">32% OFF</Text>
            </Box>
        </Box>
        {!wisht ?
          <BiHeart className={Styles.heart} onClick={() => AddToFavourites(isUser._id,itemsData,setWisht,toast,isLogin,dispatch)} /> :
          <AiFillHeart className={Styles.heart} onClick={() =>RemoveWishlistItem(isUser._id,itemsData,setWisht,toast,dispatch)} />
        }
      </Box>
        <Box onClick={()=>navigate(`/${cat}/${itemsData._id}`)}>
          <Text as="h4">{itemsData.title}</Text>
          <Text as="p">{itemsData.desc}</Text>
        </Box>
        <Box onClick={()=>navigate(`/${cat}/${itemsData._id}`)}>
          <Box>
            <Text as="p">₹{itemsData.price}</Text>
            <Text as="p">₹{itemsData.origionalPrice}</Text>
          </Box>
          <Text as="p">{itemsData.rating}★</Text>
        {/* </div> */}
      </Box>
      {cart?
      <Button onClick={() => navigate("/cart")}>GO TO CART</Button>:
      <Button onClick={() => AddToCart(isUser._id,{...itemsData,qty:1},setCart,toast,isLogin,dispatch)}>ADD TO CART</Button>}
    </Box>
  );
}

