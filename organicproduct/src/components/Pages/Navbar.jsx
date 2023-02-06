import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import Styles from "../Styles/navbar.module.css";
import { VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import {BsPersonSquare} from "react-icons/bs";
import {IoMdLogOut} from "react-icons/io"
import {
  Badge,
  IconButton,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import { Link, NavLink } from "react-router-dom";
// import MailIcon from '@mui/icons-material/Mail';
const arr = [
  { title: "HOME", link: "/" },
  { title: "SHOP ALL", link: "/shopAll" },
  { title: "NEW ARRIVALS", link: "/newArrival" },
  { title: " BEST SELLERS", link: "/bestsellers" },
  // { title: "ABOUT", link: "/about" },
];
export default function Navbar() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const smallIcon = useMediaQuery(theme.breakpoints.down("sm"));
  const [user, setuser]=useState(true)

  const activePage = {
    textDecoration: "underline",
    color: "yellow",
  };

  return (
    <React.Fragment>
      <AppBar style={appStyles}>
        <Toolbar>
          <Link to={"/"}>
            <img
              className={Styles.img}
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
              alt="logo"
            />
          </Link>

          {match ? (
            <>
              <div className={Styles.searchbar}>
                <div>
                  <GrSearch />
                  <input type="text" placeholder="Search..." />
                </div>
                <IconButton
                  size={smallIcon ? "small" : "medium"}
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <BsHandbag />
                  </Badge>
                </IconButton>
                <Link to={"/WhiteList"}>
                <IconButton
                  size={smallIcon ? "small" : "medium"}
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <AiOutlineHeart />
                  </Badge>
                </IconButton></Link>
              </div>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs style={tabsStlyes} textColor="white">
                {arr.map((elem) => (
                  <NavLink
                    to={elem.link}
                    style={({ isActive }) => {
                      return isActive ? activePage : undefined;
                    }}
                  >
                    <Tab style={{minWidth:"50px"}}
                      label={
                        <span className={Styles.navTabs}>{elem.title}</span>
                      }
                    />
                  </NavLink>
                ))}
              </Tabs>

              <MenuItem style={menuStyle}>
              
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <VscSearch />
                </IconButton>
                <Link to={"/Card"}>
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <BsHandbag />
                  </Badge>
                </IconButton></Link>
                <Link to={"/WhiteList"}>
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <AiOutlineHeart />
                  </Badge>
                </IconButton></Link>
                {!user ?
                <Link to={"/login"}> 
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit" onClick={()=>setuser(true)}
                >
                <BsPersonSquare/></IconButton></Link>:
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit" onClick={()=>setuser(false)}
                >
                <IoMdLogOut/></IconButton>}
              </MenuItem>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const appStyles = {
  background: "rgb(59, 77, 62)",
  padding: "5px",
  position: "sticky",
};
const tabsStlyes = { marginLeft: "10px" };
// const tab1Stlyes = { marginLeft: "auto", boxSizing: "borderBox" };
const menuStyle={marginLeft:"auto"}