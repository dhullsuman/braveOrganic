import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Styles from "./AddForm.module.css";

const initialAddForm = {
  name: "",
  mob: "",
  add: "",
  pin: "",
  landmark: "",
  city: "",
  state: "",
  type: "",
};

export default function AddForm({ onClick, onHide }) {
  const [input, setInput] = useState(initialAddForm);
  const [isError, setError] = useState({
    name: false,
    mob: false,
    add: false,
    pin: false,
    city: false,
    state: false,
    type: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleError = () => {
    let Error = input.name === "";
    setError({
      ...isError,
      name: input.name === "",
      mob: input.mob === "",
      add: input.add === "",
      pin: input.pin === "",
      city: input.city === "",
      state: input.state === "",
      type: input.type === "",
    });
    if (!Error) {
      CloseBox();
    }
  };

  const CloseBox = () => {
    if (
      !isError.name &&
      !isError.mob &&
      !isError.add &&
      !isError.pin &&
      !isError.city &&
      !isError.state &&
      !isError.type
    ) {
      //Send Post request for add new address
      onClick();
      onHide(false);
    }
  };
  return (
    <div className={Styles.addform}>
      <Box display="flex" gap={10}>
        <FormControl isRequired isInvalid={isError.name}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" onChange={handleInputChange} name="name" />
          {isError.name && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={isError.mob}>
          <FormLabel>Mobile No.</FormLabel>
          <Input
            name="mob"
            maxlength="10"
            onChange={handleInputChange}
            placeholder="Enter 10 digit no."
          />
          {isError.mob && (
            <FormErrorMessage>Mobile No. is required.</FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box>
        <FormControl isRequired isInvalid={isError.add}>
          <FormLabel>Address(Area & Streat)</FormLabel>
          <Textarea
            name="add"
            onChange={handleInputChange}
            placeholder="Type Your Address"
          ></Textarea>
          {isError.add && (
            <FormErrorMessage>Address is required.</FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box display="flex" gap={10}>
        <FormControl>
          <FormLabel>Landmark</FormLabel>
          <Input
            name="landmark"
            onChange={handleInputChange}
            placeholder="Enter Landmark"
          />
        </FormControl>
        <FormControl isRequired isInvalid={isError.pin}>
          <FormLabel>Pincode</FormLabel>
          <Input
            name="pin"
            onChange={handleInputChange}
            placeholder="Enter Pincode"
            maxlength="6"
          />
          {isError.pin && (
            <FormErrorMessage>Pincode is required.</FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box display="flex" gap={10}>
        <FormControl isRequired isInvalid={isError.city}>
          <FormLabel>City</FormLabel>
          <Input
            name="city"
            onChange={handleInputChange}
            placeholder="Enter City"
          />
          {isError.city && (
            <FormErrorMessage>City is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={isError.state}>
          <FormLabel>State</FormLabel>
          <Input
            name="state"
            onChange={handleInputChange}
            placeholder="Enter State"
          />
          {isError.state && (
            <FormErrorMessage>State is required.</FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box className={Styles.main4}>
        <Text as="p">Address Type</Text>
        <HStack>
          <Button
            colorScheme="white"
            bg={input.type === "Home" ? "rgb(237, 245, 245)" : "white"}
            color={input.type === "Home" ? "rgb(59, 77, 62)" : "black"}
            border="1px solid gray"
            onClick={() => setInput({ ...input, type: "Home" })}
          >
            Home
          </Button>
          <Button
            colorScheme="white"
            bg={input.type === "Office" ? "rgb(237, 245, 245)" : "white"}
            color={input.type === "Office" ? "rgb(59, 77, 62)" : "black"}
            border="1px solid gray"
            onClick={() => setInput({ ...input, type: "Office" })}
          >
            Office
          </Button>
        </HStack>
        {isError.type && <Text color="red">Type is required.</Text>}
      </Box>
      <Button
        type="submit"
        colorScheme="white"
        bg="rgb(59, 77, 62)"
        w="30%"
        onClick={handleError}
      >
        Save & Deliver
      </Button>
    </div>
  );
}
