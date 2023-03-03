import React, { useEffect, useState } from "react";
import Styles from "../Styles/navbar.module.css";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { BsPersonSquare } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import DrawerComp from "./Drawer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { handleLogOut } from "../../Redux/Register/action";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { LoginUser } from "./users";
import { TiShoppingCart } from "react-icons/ti";
import { handleCartReset } from "../../Redux/cart/action";
import { IoSettingsSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
const arr = [
  { title: "HOME", link: "/" },
  { title: "SHOP ALL", link: "/shopall" },
  { title: "NEW ARRIVALS", link: "/newarrival" },
  { title: " BEST SELLERS", link: "/bestsellers" },
  // { title: "ABOUT", link: "/about" },
];
export default function Navbar() {
  const dispatch = useDispatch();
  let { isLogin, isUser, totalCart, totalWishList } = useSelector((a) => {
    return {
      isLogin: a.userReducer.isLogin,
      isUser: a.userReducer.isUser,
      totalCart: a.cartReducer.totalCart,
      totalWishList: a.cartReducer.totalWishList,
    };
  }, shallowEqual);
  const [isSmallerThan880] = useMediaQuery("(max-width: 880px)");
  const [ser, setSearch] = useState("");
  const [searchdatas, setSearchData] = useState([]);
  const navigate = useNavigate();

  const activePage = {
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    color: "rgb(59, 77, 62)",
    backgroundColor: "white",
    borderRadius: "1rem",
  };

  const userLogOut = () => {
    localStorage.clear();
    dispatch(handleLogOut());
  };

  const searchdata = async (e) => {
    const div = document.getElementById("search");
    setSearch(e);
    try {
      if (e.length > 0) {
        div.style.display = "block";
        const searchdata = await axios.get(
          `http://localhost:8080/products?keyword=${e}&limit=100000`
        );
        setSearchData(searchdata.data.data);
      } else div.style.display = "none";
    } catch (err) {
      console.log(err);
    }
  };

  document.addEventListener("click", () => {
    searchdata("");
  });
  useEffect(() => {
    isUser = JSON.parse(localStorage.getItem("user"));
    if (isUser !== null) {
      LoginUser(dispatch, isUser._id);
    }
  }, []);
  return (
    <React.Fragment>
      <Box style={appStyles}>
        <Box
          display="flex"
          w={"100%"}
          justifyContent={"space-between"}
          padding="0 1rem"
          alignContent={"center"}
        >
          <Link to={"/"}>
            <Image
              className={Styles.logo}
              src="https://drive.google.com/uc?id=1pm3Yyl6Ae0TaK79xKtVkIMiHF8mFbEqr"
              alt="logo"
            />
          </Link>

          {isSmallerThan880 ? (
            <>
              <Box className={Styles.searchbar}>
                <Box color="green">
                  <GrSearch />
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => searchdata(e.target.value)}
                    value={ser}
                  />
                </Box>
                <Link to={"/cart"}>
                  <Box className={Styles.sup1}>
                    <TiShoppingCart className={Styles.icons} />
                    {isLogin && <Text as="p">{totalCart}</Text>}
                  </Box>
                </Link>
                <Link to={"/wishlist"}>
                  <Box className={Styles.sup}>
                    <AiOutlineHeart className={Styles.icons} />
                    {isLogin && <Text as="p">{totalWishList}</Text>}
                  </Box>
                </Link>
                
              </Box>
              <Box display={"flex"} alignContent="center">
                <DrawerComp isUser={isUser} userLogOut={userLogOut} navigate={navigate} />
              </Box>
            </>
          ) : (
            <>
              <Box className={Styles.pages}>
                {arr.map((elem) => (
                  <NavLink
                    to={elem.link}
                    key={elem.link + elem.titel}
                    style={({ isActive }) => {
                      return isActive ? activePage : undefined;
                    }}
                  >
                    <Text
                      as="p"
                      style={{ minWidth: "50px" }}
                      className={Styles.navTabs}
                    >
                      {elem.title}
                    </Text>
                  </NavLink>
                ))}
              </Box>
              <Box className={Styles.menuStyle}>
                <Box className={Styles.searchbar}>
                  <Box color="green">
                    <GrSearch />
                    <Input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => searchdata(e.target.value)}
                      value={ser}
                    />
                  </Box>
                  </Box>
                <Link to={"/cart"}>
                  <Box className={Styles.sup1}>
                    <TiShoppingCart
                      onClick={() => dispatch(handleCartReset())}
                    />
                    {isLogin && <Text as="p">{totalCart}</Text>}
                  </Box>
                </Link>
                <Link to={"/wishlist"}>
                  <Box className={Styles.sup}>
                    <AiOutlineHeart />
                    {isLogin && <Text as="p">{totalWishList}</Text>}
                  </Box>
                </Link>
                {!isLogin ? (
                  <Link to={"/login"}>
                    <BsPersonSquare />
                  </Link>
                ) : (
                  <>
                    {isUser != null && (
                      <Flex alignItems={"center"}>
                        <Menu>
                          <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                          >
                            <HStack>
                              <Avatar size={"sm"} src={"isUser.avtar"} />
                              <VStack
                                display={{ base: "none", md: "flex" }}
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
                          <MenuList backgroundColor="rgb(59,77,62)">
                            <MenuItem
                              backgroundColor="rgb(59,77,62)"
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
                                  backgroundColor="rgb(59,77,62)"
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
                              backgroundColor="rgb(59,77,62)"
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
                    )}
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box
        display="none"
        w={{lg:"50%",md:"60%",base:"100%"}}
        m="auto"
        border="2px solid black"
        h="40vh"
        overflowY="scroll"
        scrollBehavior="smooth"
        id="search"
      >
        {searchdatas?.map((el) => (
          <Box
            display="flex"
            key={el._id}
            alignItems="center"
            gap={"10vh"}
            w="100%"
            p="1vh"
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            onClick={() => {
              setSearch("");
              navigate(`/${"search"}/${el._id}`);
            }}
          >
            <Image src={el.img1} alt={el.title} w={{lg:"20vh",md:"20vh",base:"10vh"}} h={{lg:"20vh",md:"20vh",base:"10vh"}} />
            <Text as="h2">{el.title}</Text>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
}

const appStyles = {
  background: "rgb(59, 77, 62)",
  padding: "5px",
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  alignContent: "center",
};
