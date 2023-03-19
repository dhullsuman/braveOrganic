import { Box, Container } from "@chakra-ui/react";
import React from "react";

import AdminNavbar from "../Admin/AdminNavbar";
import Dashbord from "../Admin/Dashboard";

const AdminDshboard = () => {
  
  return (
    <div>
      <AdminNavbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
        >
          <Dashbord />
        </Container>
      </Box>
    </div>
  );
};

export default AdminDshboard;