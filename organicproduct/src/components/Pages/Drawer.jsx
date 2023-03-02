import React, { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import Styles from "../Styles/navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import {  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, List, ListIcon, ListItem, Text, useDisclosure } from "@chakra-ui/react";
import { BsFillXDiamondFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
export default function DrawerComp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const arr = [
    { title: "HOME", link: "/" },
    { title: "SHOP ALL", link: "/shopall" },
    { title: "NEW ARRIVALS", link: "/newarrival" },
    { title: " BEST SELLERS", link: "/bestsellers" },
    // { title: "ABOUT", link: "/about" },
  ];

  return (
    <React.Fragment>
      <HiMenu onClick={onOpen} className={ Styles.iconh} />
      <Drawer isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="xs"
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >
          <Link to={"/"}>
      <Image
            className={Styles.img}
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
            alt="logo"
          />
          </Link></DrawerHeader>

          <DrawerBody backgroundColor="rgb(59, 77, 62)" color="white">
            <List>
          {arr.map((elem) => (
            <NavLink to={elem.link} key={elem.link+elem.title}>
              <ListItem fontSize="1.5rem" onClick={onClose}>
              <ListIcon as={elem.title==="HOME" ? FaHome: BsFillXDiamondFill}/>
                  <Text as="p" style={{ display:"inline",  fontWeight: 600,  }}>{elem.title}</Text>
                </ListItem>
            </NavLink>
          ))}
        </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}
