import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ icon, name, link }) => {
  return (
    <Link
      to={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: "rgb(59,77,62)",
          bg: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="18"
            _groupHover={{
              color: "rgb(59,77,62)",
            }}
            as={icon}
          />
        )}
        {name}
      </Flex>
    </Link>
  );
};

export default NavItem;