import { Box, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AdminNavbar from "../Admin/AdminNavbar";
import TotalUsers from "../Admin/TotalUsers";

const AdminShowUser = () => {
  const { isUser } = useSelector(store => store.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if(isUser.role === "user") navigate("/")
  },isUser.role)
  return (
    <div>
      <AdminNavbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"20px"}>
          <TotalUsers />
        </Container>
      </Box>
    </div>
  );
};

export default AdminShowUser;