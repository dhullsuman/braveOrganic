import { Button, Td, Tr, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { adminDeleteUser, getAllUser } from "../../Redux/Admin/action";
import { LoginUser } from "../Pages/users";

const token = JSON.parse(localStorage.getItem("brave_token"));
const config = {
  headers: {
    token: token,
  },
};

const AdminShowUserCard = ({
  id,
  first_name,
  last_name,
  email,
  wishlist,
  cartitem,
  orderitem,
  role,
}) => {
  const toast = useToast();
  const { isUser } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const changeRole = async (role) => {
    const data = { role };
    await axios.patch(
      `https://braveorganic.onrender.com/admin/user/update/${id}`,
      data,
      config
    );
    dispatch(getAllUser());
    LoginUser(dispatch, isUser._id);
  };
  return (
    <Tr
      textAlign={"center"}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Td>{id}</Td>
      <Td>{first_name}</Td>
      <Td>{last_name}</Td>
      <Td>{email}</Td>
      <Td>{wishlist}</Td>
      <Td>{cartitem}</Td>
      <Td>{orderitem}</Td>
      <Td display="flex" gap="2px">
        <Button
          bg={role === "admin" ? "green" : "red"}
          _hover={{ bg: role === "admin" ? "green" : "red" }}
          onClick={() => changeRole("admin")}
        >
          Admin
        </Button>
        <Button
          bg={role === "user" ? "green" : "red"}
          _hover={{ bg: role === "user" ? "green" : "red" }}
          onClick={() => changeRole("user")}
        >
          User
        </Button>
      </Td>

      <Td
        color={"red"}
        cursor={"pointer"}
        onClick={() =>
          dispatch(
            adminDeleteUser(id),
            toast({
              title: "delete successfully",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            })
          )
        }
      >
        {<MdDelete />}
      </Td>
    </Tr>
  );
};

export default AdminShowUserCard;
