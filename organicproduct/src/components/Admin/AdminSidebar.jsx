import React from "react";
import { Box, CloseButton, Flex, Image } from "@chakra-ui/react";
import {
  FiTrendingUp,
  FiUser,
  FiPieChart,
} from "react-icons/fi";
import NavItem from "./NavItems";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ onClose, display }) => {
  const navigate = useNavigate();
  const LinkItems = [
    { name: "Dashboard", icon: FiPieChart, link: "/admin" },
    { name: "Product", icon: FiTrendingUp, link: "/admin/product" },
    { name: "User", icon: FiUser, link: "/admin/user" },
    // { name: "Oders", icon: FiShoppingCart, link: "/admin/orders" },
  ];

  return (
      <Box
        transition="3s ease"
        bg={"rgb(59,77,62)"}
    color="white"
        // borderRight="1px"
        // borderRightColor={"gray.200"}
        w={{ base: "full", md: 60 }}
        display={display}
        pos="fixed"
        h={"full"}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box
            width={{ base: "50%", sm: "60%", md: "40%", lg: "80%" }}
            display={{ lg: "none" }}
          >
            <Image  src="https://drive.google.com/uc?id=1pm3Yyl6Ae0TaK79xKtVkIMiHF8mFbEqr"  alt="logo"width="60px" height="60px" borderRadius="5px" onClick={()=>navigate("/admin")}/>
          </Box>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            name={link.name}
            link={link.link}
          />
        ))}
      </Box>
  );
};

export default Sidebar;