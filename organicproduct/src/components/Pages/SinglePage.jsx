import React, { useEffect, useRef, useState } from "react";
import Styles from "../Styles/subProduct.module.css";
import { BiHeart } from "react-icons/bi";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import {
  AddToCart,
  AddToFavourites,
  ChangeQuentity,
  LoginUser,
  RemoveWishlistItem,
} from "./users";

export default function SinglePage() {
  const [data, setData] = useState({});
  const [quty, setquty] = useState(1);
  const navigate = useNavigate();
  const ref = useRef(null);
  const toast = useToast();
  const id = useParams();
  const [wisht, setWisht] = useState(false);
  const [cart, setCart] = useState(false);
  const { isUser, isLogin } = useSelector((a) => {
    return { isLogin: a.userReducer.isLogin, isUser: a.userReducer.isUser };
  }, shallowEqual);
  const dispatch = useDispatch();
  async function getArrivalData() {
    try {
      const res = await axios.get(`http://localhost:8080/products/${id.id}`);
      setData(res.data.singleProduct);
    } catch (e) {}
  }

  function ChangeQty(a) {
    setquty(quty+a)
    const newData = { ...data, qty: quty+a };
    console.log(newData);
  }

  useEffect(() => {
    if (isUser != null) {
      const WistFilter = isUser.wishList?.filter((el) => el._id === id.id);
      const CartFilter = isUser.cartItem?.filter((el) => el._id === id.id);
      if (WistFilter?.length > 0) setWisht(true);
      else setWisht(false);
      if (CartFilter?.length > 0) {setCart(true); setquty(CartFilter[0].qty)}
      else setCart(false);
      LoginUser(dispatch, isUser._id);
    }
    getArrivalData();
  }, [id, isUser.wishList?.length,isUser.cartItem?.length]);

  return (
    <>
      <Box className={Styles.topImg}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1_5-Offer-Desktop-Upsell-V1_1200x.jpg?v=1671099969"
          alt=""
        />
      </Box>

      <Box className={Styles.singleItem}>
        <Box className={Styles.main}>
          <Box>
            <Image src={data.img1} alt="pic1" ref={ref} />
            <Box>
              <Box>
                {data.subCat === "best" && (
                  <>
                    <Text as="p">#1</Text>
                    <Text as="p">BEST SELLER</Text>
                  </>
                )}
              </Box>
              <Box>
                <Text as="p">{data.Off} OFF</Text>
              </Box>
            </Box>
            {!wisht ? (
              <BiHeart
                className={Styles.heart}
                onClick={() =>
                  AddToFavourites(isUser._id, data, setWisht, toast, isLogin,dispatch)
                }
              />
            ) : (
              <AiFillHeart
                className={Styles.heart}
                onClick={() =>
                  RemoveWishlistItem(isUser._id, data, setWisht, toast,dispatch)
                }
              />
            )}
          </Box>

          <Box>
            <img
              src={data.img1}
              alt=""
              onClick={() => {
                ref.current.src = data.img1;
              }}
            />
            <img
              src={data.img2}
              alt=""
              onClick={() => {
                ref.current.src = data.img2;
              }}
            />
            <img
              src={data.img3}
              alt=""
              onClick={() => {
                ref.current.src = data.img3;
              }}
            />
            <img
              src={data.img4}
              alt=""
              onClick={() => {
                ref.current.src = data.img4;
              }}
            />
          </Box>
        </Box>

        <Box className={Styles.main1}>
          <Box>
            <Text as="h2">{data.title}</Text>
            <Text as="p">{data.desc}</Text>
          </Box>
          <Box>
            <Box>
              <Text as="p">-{data.Off}</Text>
              <Text as="p">₹{Number(data.price)*quty}</Text>
            </Box>
            <Text as="p">{data.rating}★</Text>
            {/* </div> */}
          </Box>
          <Box>
            <Text as="p">
              M.R.P.: <span>₹{data.origionalPrice}</span>
            </Text>
            <Text as="p">Inclusive of all taxes</Text>
          </Box>
          <Box>
            <Button onClick={() => ChangeQuentity(isUser._id,data,setquty,quty,-1,dispatch)}isDisabled={quty === 1}>
              -
            </Button>
            <Button>{quty}</Button>
            <Button onClick={() => ChangeQuentity(isUser._id,data,setquty,quty,1,dispatch)} isDisabled={quty === 5}>
              +
            </Button>
          </Box>
          {cart ? (
            <Button onClick={() => navigate("/cart")}>GO TO CART</Button>
          ) : (
            <Button
              onClick={() =>
                AddToCart(isUser._id, {...data,qty:quty}, setCart, toast, isLogin,dispatch)
              }
            >
              ADD TO CART
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
