import { Flex, Image, Td, Text, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminDeleteProduct } from "../../Redux/Admin/action";


const AdminSingleProduct = ({ id, img, title, price, stocks, page }) => {
  const { deletemsg } = useSelector((store) => store.adminReducer);
  const toast = useToast();
  const dispatch = useDispatch();
  return (
    <Tr
      textAlign={"center"}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Td width={"10%"}>
        <Image src={img} width={"100%"} />
      </Td>
      <Td>{title}</Td>
      <Td>{price}</Td>
      <Td>{stocks}</Td>
      {stocks < 1 ? (
        <Td>
          <Flex alignItems={"center"} gap={"5px"}>
            <Image
              src="https://img.icons8.com/emoji/48/null/red-circle-emoji.png"
              width={"10%"}
            />

            <Text color={"#EF4444"} fontWeight={"bold"}>
              Out Of Stock
            </Text>
          </Flex>
        </Td>
      ) : (
        <Td>
          <Flex alignItems={"center"} gap={"5px"}>
            <Image
              src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png"
              width={"10%"}
            />
            <Text color={"green"} fontWeight={"bold"}>
              In Stock
            </Text>
          </Flex>
        </Td>
      )}
      <Td>
        <Link to={`/admin/update/${id}`}>{<BsPencilFill />}</Link>
      </Td>
      <Td
        color={"red"}
        cursor={"pointer"}
        onClick={() =>
          dispatch(
            adminDeleteProduct(id, page),
            toast({
              title: "Delete Successfully",
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

export default AdminSingleProduct;