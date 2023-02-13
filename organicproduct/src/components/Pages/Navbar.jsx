// import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import Styles from "../Styles/navbar.module.css";
import { VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import {BsPersonSquare} from "react-icons/bs";
import {IoMdLogOut} from "react-icons/io"
// import {
//   Badge,
//   IconButton,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
import DrawerComp from "./Drawer";
import { Link, NavLink } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { handleLogOut } from "../../Redux/Register/action";
import { Badge, Box, Button, IconButton, MenuItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useMediaQuery, useTheme } from "@chakra-ui/react";
// import MailIcon from '@mui/icons-material/Mail';
const arr = [
  { title: "HOME", link: "/" },
  { title: "SHOP ALL", link: "/shopall" },
  { title: "NEW ARRIVALS", link: "/newarrival" },
  { title: " BEST SELLERS", link: "/bestsellers" },
  // { title: "ABOUT", link: "/about" },
];
export default function Navbar() {
  const dispatch = useDispatch();
  const {isLogin, isUser} = useSelector((a)=>{return {isLogin: a.userReducer.isLogin, isUser:a.userReducer.isUser}},shallowEqual)
  const [isSmallerThan880] = useMediaQuery('(max-width: 880px)')

  const [isSmallerThan430] = useMediaQuery('(max-width:430px)');

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
  // console.log(user)
  return (
    <React.Fragment>
      <Box style={appStyles}>
        <Box display="flex" w={"100%"} justifyContent={"space-between"} padding="0 1rem" alignContent={"center"} >
          <Link to={"/"}>
            <img
              className={Styles.logo}
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
              alt="logo"
            />
          </Link>

          {isSmallerThan880 ? (
            <>
              <div className={Styles.searchbar}>
                <div>
                  
                  <GrSearch />
                  <input type="text" placeholder="Search..." />
                </div>
                <Link to={ "/cart"}>
                <BsHandbag className={Styles.icons} /></Link>
                <Link to={"/WhiteList"}>
              < AiOutlineHeart className={Styles.icons}/>
                </Link>
              </div>
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
                <Link to={"/Card"}>
                <BsHandbag/>
                  </Link>
                <Link to={"/WhiteList"}>
                <AiOutlineHeart/>
                  </Link>
                  {!isLogin ? 
                    <Link to={"/login"}>
                    <BsPersonSquare/>
                    </Link>
                    : <>
                    <Text as="p">Suman Dhul</Text>
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
  display: "flex",
  alignContent: "center",
  // border:"5px solid yellow"
};