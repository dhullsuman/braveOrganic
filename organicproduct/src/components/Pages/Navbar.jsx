import React, { useEffect } from "react";
import Styles from "../Styles/navbar.module.css";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import {BsPersonSquare} from "react-icons/bs";
import {IoMdLogOut} from "react-icons/io"
import DrawerComp from "./Drawer";
import { Link, NavLink } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { handleLogOut } from "../../Redux/Register/action";
import { Box, Image, Input,Text, useMediaQuery } from "@chakra-ui/react";
import { LoginUser } from "./users";
import { TiShoppingCart } from "react-icons/ti";
const arr = [
  { title: "HOME", link: "/" },
  { title: "SHOP ALL", link: "/shopall" },
  { title: "NEW ARRIVALS", link: "/newarrival" },
  { title: " BEST SELLERS", link: "/bestsellers" },
  // { title: "ABOUT", link: "/about" },
];
export default function Navbar() {
  const dispatch = useDispatch();
  let {isLogin, isUser,totalCart,totalWishList} = useSelector((a)=>{return {isLogin: a.userReducer.isLogin, isUser:a.userReducer.isUser,totalCart:a.cartReducer.totalCart,totalWishList:a.cartReducer.totalWishList}},shallowEqual)
  const [isSmallerThan880] = useMediaQuery('(max-width: 880px)')

  const activePage = {
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    color: "rgb(59, 77, 62)",
    backgroundColor: "white",
    borderRadius:"1rem"
    
  };

  const userLogOut = () => {
    localStorage.clear();
    dispatch(handleLogOut())
  }
  useEffect(() => {
    isUser = JSON.parse(localStorage.getItem("user"));
if(isUser!==null)  {  LoginUser(dispatch, isUser._id);}
  }, [])
  return (
    <React.Fragment>
      <Box style={appStyles}>
        <Box display="flex" w={"100%"} justifyContent={"space-between"} padding="0 1rem" alignContent={"center"} >
          <Link to={"/"}>
            <Image
              className={Styles.logo}
              src="./logo.png"
              alt="logo"
            />
          </Link>

          {isSmallerThan880 ? (
            <>
              <Box className={Styles.searchbar}>
                <Box>
                  <GrSearch />
                  <Input type="search" placeholder="Search..." />
                </Box>
               <Link to={"/cart"}>
                  <Box className={Styles.sup1}>
                    <TiShoppingCart className={Styles.icons}/>
                    { isLogin && <Text as="p">{totalCart }</Text>}
                  </Box>
                  </Link>
                  <Link to={"/wishlist"}>
                    <Box className={Styles.sup}>
                    <AiOutlineHeart className={Styles.icons}/>
                  { isLogin && <Text as="p">{totalWishList}</Text>}
                    </Box>
                  </Link>
              </Box>
              <Box display={"flex"} alignContent="center" >
              <DrawerComp />
              </Box>
            </>
          ) : (
              <>
                <Box className={Styles.pages}   >
                  {arr.map((elem)=><NavLink
                    to={elem.link}
                    key={elem.link+elem.titel}
                    style={({ isActive }) => {
                      return isActive ? activePage : undefined;
                    }}
                  >
  <Text as="p" style={{minWidth:"50px"}} className={Styles.navTabs}> {elem.title}</Text>

                  </NavLink>)}
</Box>
              <Box className={Styles.menuStyle}>
              
                <VscSearch/>
                <Link to={"/cart"}>
                  <Box className={Styles.sup1}>
                    <TiShoppingCart/>
                    { isLogin && <Text as="p">{totalCart }</Text>}
                  </Box>
                  </Link>
                  <Link to={"/wishlist"}>
                    <Box className={Styles.sup}>
                    <AiOutlineHeart />
                 {  isLogin && <Text as="p">{totalWishList}</Text>}
                    </Box>
                  </Link>
                  {!isLogin ? 
                    <Link to={"/login"}>
                    <BsPersonSquare/>
                    </Link>
                    : <>
                     {isUser!=null && <Text as="p">{isUser.firstName} { isUser.lastName}</Text>}
                    <IoMdLogOut onClick={userLogOut} /></>}
                    </Box>
            </>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

const appStyles = {
  background: "rgb(59, 77, 62)",
  padding: "5px",
  position: "sticky",
  top: 0,
  zIndex:1,
  display: "flex",
  alignContent: "center",
};