import {
    Drawer,
    DrawerContent,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../Pages/users";
import AdminMobileNavbar from "./AdminMobileNavbar";
import Sidebar from "./AdminSidebar";
  
  const AdminNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const { isUser } = useSelector(store => store.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
      if (isUser.role === "user") navigate("/");
      LoginUser(dispatch, isUser._id);
    },[])
    return (
      <div>
        <Sidebar onClose={() => onClose} display={{ base: "none", md: "block" }} />
  
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <AdminMobileNavbar onOpen={onOpen} />
      </div>
    );
  };
  export default AdminNavbar;