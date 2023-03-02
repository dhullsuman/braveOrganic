import Styles from "./addressItem.module.css";
import { FiEdit2 } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleAddAddress } from "../../Redux/cart/action";

export default function AddAddress({ check, onClick, editForm }) {
  const dispatch = useDispatch();
  return (
    <Box
      border={check ? "2px solid rgb(59, 77, 62)" : "2px solid gray"}
      bg={check ? "rgb(237, 245, 245)" : " "}
      onClick={onClick}
    >
      <Box>
        <Text as="p">H.No.848, Street 11, Landmark RAM NAGAR NARWANA</Text>
        <Text as="p">District JIND,</Text>
        <Text as="p">JIND, HARYANA, 126116</Text>
        <Text as="p">+91 7988376352</Text>
      </Box>
      <HStack>
        <HStack>
          <Box
            className={Styles.select}
            border={check ? "2px solid rgb(59, 77, 62)" : "2px solid gray"}
          >
            <VscCircleFilled
              size={40}
              fill={check ? "rgb(59,77,62)" : "gray"}
            />
          </Box>
          <Text as="p">Home</Text>
        </HStack>
        <HStack color="gray">
          <FiEdit2 onClick={editForm} />
          <RiDeleteBin5Line />
        </HStack>
      </HStack>
      <Button
        colorScheme={check ? "rgb(59,77,62)" : " "}
        bg={check ? "rgb(59,77,62)" : "gray"}
        onClick={check ? () => dispatch(handleAddAddress()) : ""}
        disabled={check ? false : true}
      >
        Deliver Here
      </Button>
    </Box>
  );
}
