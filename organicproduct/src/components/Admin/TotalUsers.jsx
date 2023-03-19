import {
    Button,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getAllUser } from "../../Redux/Admin/action";
  
  import AdminShowUserCard from "./AdminShowUserCard";
  
  const TotalUsers = () => {
    const { adminAlluser } = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllUser());
    }, []);
    return (
      <div>
        <Heading textAlign={"center"}>Users</Heading>
        <TableContainer
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          bg={"white"}
          mt={"25px"}
        >
          <Table variant={"simple"}>
            <Thead bg={"cyan.300"} fontWeight={"bold"}>
              <Tr>
                <Th>id</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Wishlist</Th>
                <Th>Cartitem</Th>
                <Th>Order</Th>
                <Th>Role</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {adminAlluser.map((item) => (
                <AdminShowUserCard
                  key={item._id}
                  id={item._id}
                  first_name={item.firstName}
                  last_name={item.lastName}
                  email={item.email}
                  wishlist={item.wishList.length}
                  cartitem={item.cartItem.length}
                  orderitem={item.orderItem.length}
                  role={item.role }
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default TotalUsers;