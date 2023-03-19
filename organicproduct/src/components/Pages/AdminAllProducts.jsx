import { Box, Container } from "@chakra-ui/react";
import React from "react";

import AdminNavbar from "../Admin/AdminNavbar";
import AdminProduct from "../Admin/AdminProduct";


const AdminAllProducts = () => {

  return (
    <div>
      <AdminNavbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"20px"}>
          <AdminProduct />
        </Container>
      </Box>
    </div>
  );
};

export default AdminAllProducts;