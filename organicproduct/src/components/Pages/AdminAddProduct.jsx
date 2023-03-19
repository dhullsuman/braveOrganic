import { Box, Container } from "@chakra-ui/react";
import React from "react";
import AdminAddProduct from "../Admin/AddProduct";
import AdminNavbar from "../Admin/AdminNavbar";


function AdminAddPoductPage() {
  return (
    <div>
      <AdminNavbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
        >
          <AdminAddProduct />
        </Container>
      </Box>
    </div>
  );
}

export default AdminAddPoductPage;