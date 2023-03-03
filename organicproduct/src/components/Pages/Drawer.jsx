import React, { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import Styles from "../Styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import {  Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, List, ListIcon, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { BsFillXDiamondFill } from "react-icons/bs";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
export default function DrawerComp({isUser,navigate,userLogOut}) {
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
          {isUser != null && (
                      <Flex alignItems={"center"}>
                        <Menu>
                          <MenuButton
                            // py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                          >
                            <HStack>
                              <Avatar size={"sm"} src={"isUser.avtar"} />
                              <VStack
                                display={{ base: "flex", md: "flex" }}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2"
                              >
                                <Text fontSize="sm">
                                  {isUser.firstName} {isUser.lastName}
                                </Text>
                                <Text fontSize="xs">{isUser.role}</Text>
                              </VStack>
                              <Box
                                display={{
                                  base: "none",
                                  md: "flex",
                                  lg: "none",
                                }}
                              >
                                <FiChevronDown />
                              </Box>
                            </HStack>
                          </MenuButton>
                          <MenuList backgroundColor="white">
                            <MenuItem
                              backgroundColor="white"
                              _hover={{
                                boxShadow:
                                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                                backgroundColor: "white",
                                color: "rgb(59,77,62)",
                              }}
                            >
                              <FaUserCircle className={Styles.menuicon} />
                              Profile
                            </MenuItem>
                            <MenuItem
                                  backgroundColor="white"
                                  _hover={{
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                                    backgroundColor: "white",
                                    color: "rgb(59,77,62)",
                                  }}
                                  onClick={()=>navigate("/order") }
                            >
                                  <IoSettingsSharp className={Styles.menuicon} />
                                  
                              Order
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem
                              onClick={userLogOut}
                              backgroundColor="white"
                              _hover={{
                                boxShadow:
                                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                                backgroundColor: "white",
                                color: "rgb(59,77,62)",
                              }}
                            >
                              <IoMdLogOut className={Styles.menuicon} />
                              Sign out
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Flex>
                    )}</DrawerHeader>

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
