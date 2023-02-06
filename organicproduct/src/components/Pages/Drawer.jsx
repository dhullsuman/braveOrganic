import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemIcon } from "@mui/material";
import { ListItemButton, ListItemText } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import Styles from "../Styles/navbar.module.css";
import { Link, NavLink } from "react-router-dom";
export default function DrawerComp() {
  const [openDrawer, setopenDrawer] = useState(false);
  const arr = [
    { title: "HOME", link: "/" },
    { title: "SHOP ALL", link: "/shopAll" },
    { title: "NEW ARRIVALS", link: "/newArrival" },
    { title: " BEST SELLERS", link: "/bestsellers" },
    // { title: "ABOUT", link: "/about" },
  ];
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <Link to={"/"}>
      <img
            className={Styles.img}
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
            alt="logo"
          />
          </Link>
        <List>
          {arr.map((elem) => (
            <NavLink to={elem.link}>
            <ListItemButton onClick={()=>setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText><span style={{color:"rgb(59, 77, 62)", fontWeight:600, fontSize:"12px"}}>{elem.title }</span></ListItemText>
              </ListItemIcon>
            </ListItemButton></NavLink>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setopenDrawer(!openDrawer)} sx={{color:"white",marginLeft:"auto"}}>
        <HiMenu />
      </IconButton>
    </React.Fragment>
  );
}
