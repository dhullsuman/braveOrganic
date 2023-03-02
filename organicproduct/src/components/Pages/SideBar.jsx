import React from "react";
import Styles from "../Styles/sideBar.module.css";
import { BiSliderAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export default function SideBar() {
  const activePage = {
    textDecoration: "underline",
    fontWeight:800,
    color: "rgb(59,77,62)",
  };
  return (
    <Box className={Styles.categ}>
      <Box>
        <BiSliderAlt />
        <Text as="p">REFINE BY</Text>
      </Box>
      <Text as="h4">CATEGORIES</Text>
      <hr />
      <Box>
        <NavLink to={"/shopall"} style={({isActive}) => {
                      return isActive ? activePage : undefined;
                    }}>Shop All</NavLink>
          <NavLink to={"/newarrival"} style={({isActive}) => {
                        return isActive ? activePage : undefined;
                      }}>New Arrival</NavLink>
        <NavLink to={"/bestsellers"} style={({isActive}) => {
                      return isActive ? activePage : undefined;
                    }}>Best Sellers</NavLink>
      </Box>
    </Box>
  );
}
