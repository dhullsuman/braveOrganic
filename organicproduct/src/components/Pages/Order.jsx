// https://cdn.dribbble.com/users/324533/screenshots/1419546/media/38f6589f200833e40e0bc6bacc2a87b2.gif

import {
    Box,
    Button,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { shallowEqual, useDispatch, useSelector } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
  import Styles from "../Styles/whiteList.module.css";
  import {LoginUser } from "./users";
  
  function OrderListItem({ el, isLogin, dispatch, isUser }) {
  
    const navigate = useNavigate();
    
    useEffect(() => {
      if (isUser != null) {
        LoginUser(dispatch, isUser._id);
      }
    }, [el.id, isUser.cartItem?.length]);
  
    return (
      <>
        <Box onClick={() => navigate(`/${"order"}/${el._id}`)}>
          <Image src={el.img1} alt="image" />
        </Box>
        <Box>
          <Box>
            <Text as="h3" onClick={() => navigate(`/${"order"}/${el._id}`)}>
              {el.title}
            </Text>
            <Text as="p">{el.desc}</Text>
                    <Text as="p">Rs.{Number(el.price)*el.qty}</Text>
                    <Text as="p">Quantity : {el.qty }</Text>
          </Box>
        </Box>
      </>
    );
  }
  
  export default function AllOrder() {
    let { isUser, isLogin } = useSelector((a) => {
      return { isLogin: a.userReducer.isLogin, isUser: a.userReducer.isUser };
    }, shallowEqual);
    isUser = JSON.parse(localStorage.getItem("user"));
    const [data, setData] = useState([]);
      const dispatch = useDispatch();
      const navigate = useNavigate();
  
    useEffect(() => {
      setData(isUser.orderItem);
      LoginUser(dispatch, isUser._id);
    }, [isUser._id, isUser.orderItem?.length]);
  
      return (<Box w={{ lg: "100%", md: "95%", base: "90%" }} display={{ lg: "flex", md: "flex", base: "block" }} margin="auto" gap={6} padding="1.5rem 0" justifyContent={"center"}>{data?.length === 0 ? <Box display="flex" alignItems="center" flexDirection="column"  id={Styles.orderimg}> <Image src="https://i.pinimg.com/originals/ff/3d/66/ff3d66d438ddff2c520db4d26fce8760.jpg" alt="" onClick={()=>navigate("/shopall")} />
    </Box>:
      <Box className={Styles.mainDiv}>
        <Box>
          <Text as="h1">MY ORDER</Text>
        </Box>
  
        <SimpleGrid
          columns={[1, 2, 2, 3, 3]}
          width={{ base: "100%", sm: "90%", md: "100%", lg: "90%" }}
          p={{ base: "2vh 1vh", md: "3vh 1vh", lg: "3vh 0" }}
        >
          {data?.map((el,index) => (
            <Box className={Styles.whtList} key={el._id+index}>
              <OrderListItem
                el={el}
                isLogin={isLogin}
                dispatch={dispatch}
                isUser={isUser}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      }</Box>
  
    );
  }
  