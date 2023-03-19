import {
    Avatar,
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { handleLogOut } from "../../Redux/Register/action";
  const AdminMobileNavbar = ({ onOpen }) => {
    const { isAuth, isUser } = useSelector((store) => store.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const admin = JSON.parse(localStorage.getItem("brave_user")) || {};
    // console.log(admin);
    const handleLoginClick = () => {
      localStorage.clear();
      dispatch(handleLogOut());
    };
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={"rgb(59,77,62)"}
        borderBottomWidth="1px"
        borderBottomColor={"gray.200"}
        color="white"
        justifyContent={{ base: "space-between", md: "flex-end" }}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Box
          display={{ base: "none", lg: "flex", md: "none", sm: "none" }}
          margin={"auto"}
          justifyContent={"center"}
        >
          <Image  src="https://drive.google.com/uc?id=1pm3Yyl6Ae0TaK79xKtVkIMiHF8mFbEqr" alt="logo" width="60px" height="60px" onClick={()=>navigate("/admin")}/>
        </Box>
  
        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size="lg"
            _hover={{
                color: "rgb(59,77,62)",
                bg:"white"
            }}
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} src={isUser.avatar || admin.avatar} />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">
                      {isUser.firstName || admin.firstName}
                      {isUser.lastName || admin.lastName}
                    </Text>
                    <Text fontSize="xs" color="whiteAlpha.700">
                      {isUser.role}
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex", lg: "none" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList bg={"rgb(59,77,62)"} borderColor={"gray.200"} >
                <MenuItem bg={"rgb(59,77,62)"}>Profile</MenuItem>
                <MenuItem bg={"rgb(59,77,62)"}>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLoginClick} bg={"rgb(59,77,62)"}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  
  export default AdminMobileNavbar;