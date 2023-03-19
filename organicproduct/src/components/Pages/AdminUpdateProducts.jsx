import { Box, Container } from "@chakra-ui/react";
import React from "react";

import AdminNavbar from "../Admin/AdminNavbar";
import UpdateProduct from "../Admin/UpdateProducts";

const AdminUpdateProduct = () => {
  
  return (
    <div>
      <AdminNavbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
          // border={"1px solid red"}
        >
          <UpdateProduct />
        </Container>
      </Box>
    </div>
  );
};

export default AdminUpdateProduct;