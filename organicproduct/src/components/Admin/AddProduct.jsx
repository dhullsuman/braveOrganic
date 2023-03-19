import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Stack,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../Redux/Admin/action";
  
  const AdminAddProduct = () => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const { msg } = useSelector((store) => store.adminReducer);
    console.log(msg);
    const dispatch = useDispatch();
    const toast = useToast();
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addProduct(product));
      toast({
        title: "Added Successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      navigate("/admin/product")
    };
  
    const hanldeChange = (e) => {
      const { name, value } = e.target;
      setProduct({
        ...product,
        [name]: value,
      });
    };
    return (
      <div>
        <Heading textAlign={"center"} pt={"20px"}>
          Add Product
        </Heading>
        <Flex justify={"center"} width={"100%"} bg={"whiteAlpha.800"} mt={"15"}>
          <form
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "30px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            onSubmit={handleSubmit}
          >
           <Stack
              spacing={"10"}
              direction={{ base: "column", sm: "row" }}
              width={{ base: "100%", sm: "100%" }}
            >
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Product Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    onChange={hanldeChange}
                    placeholder={"Title"}
                  />
                </FormControl>
              </Box>
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    type="text"
                    name="price"
                    onChange={hanldeChange}
                    placeholder={"Product Price"}
                  />
                </FormControl>
              </Box>
            </Stack>
            <Stack
              spacing={"10"}
              direction={{ base: "column", sm: "row" }}
              width={{ base: "100%", sm: "100%" }}
            >
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Product Description</FormLabel>
                  <Input
                    type="text"
                    name="desc"
                    onChange={hanldeChange}
                    placeholder={"Description"}
                  />
                </FormControl>
              </Box>
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    type="text"
                    name="Off"
                    onChange={hanldeChange}
                    placeholder={"Product Off"}
                  />
                </FormControl>
              </Box>
            </Stack>
            <Stack
              spacing={"10"}
              direction={{ base: "column", sm: "row" }}
              width={{ base: "100%", sm: "100%" }}
            >
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>First Image</FormLabel>
                  <Input
                    type="text"
                    name="img1"
                    onChange={hanldeChange}
                    placeholder={"Image URL"}
                  />
                </FormControl>
              </Box>
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Second Image</FormLabel>
                  <Input
                    type="text"
                    name="img2"
                    onChange={hanldeChange}
                    placeholder={"Image URL"}
                  />
                </FormControl>
              </Box>
            </Stack>
            <Stack
              spacing={"10"}
              direction={{ base: "column", sm: "row" }}
              width={{ base: "100%", sm: "100%" }}
            >
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Third Image</FormLabel>
                  <Input
                    type="text"
                    name="img3"
                    onChange={hanldeChange}
                    placeholder={"Image URL"}
                  />
                </FormControl>
              </Box>
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Forth Image</FormLabel>
                  <Input
                    type="text"
                    name="img4"
                    onChange={hanldeChange}
                    placeholder={"Image URL"}
                  />
                </FormControl>
              </Box>
            </Stack>
            <Stack
              width={{ base: "100%", sm: "100%" }}
              spacing={"10"}
              direction={{ base: "column", sm: "row" }}
            >
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Main-Category</FormLabel>
                  <Select
                    placeholder="Select option"
                    onChange={hanldeChange}
                    name="mainCat"
                  >
                    <option value="bestseller">Bestseller</option>
                    <option value="shopall">Shop All</option>
                    <option value="newArrival">New Arrival</option>
                  </Select>
                </FormControl>
              </Box>
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Sub-Category</FormLabel>
                  <Select
                    onChange={hanldeChange}
                    name="subCat" placeholder="Select option"
                  >
                      <option value="best">Best</option>                  
                      <option value="sales">Sales</option>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
            <Stack
              width={{ base: "100%", sm: "100%" }}
              spacing={"10"}
              direction={{ base: "column", sm: "row" }}
            >
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Price Strike</FormLabel>
                  <Input
                    type="text"
                    name="origionalPrice"
                    onChange={hanldeChange}
                    placeholder={"Orignal Price "}
                  />
                </FormControl>
              </Box>
              <Box width={{ base: "100%", sm: "100%" }}>
                <FormControl>
                  <FormLabel>Add Stocks</FormLabel>
                  <Input
                    type="text"
                    name="stocks"
                    onChange={hanldeChange}
                    placeholder={"Stocks"}
                  />
                </FormControl>
              </Box>
            </Stack>
            <Stack
              spacing={10}
              pt={8}
              display={"flex"}
              direction={{ base: "column", sm: "row" }}
              justifyContent={{ base: "center", sm: "center", lg: "flex-end" }}
            >
              <Button
                width={{ base: "50%", sm: "50%", lg: "15%" }}
                size={"md"}
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "#02B862",
                }}
                type={"submit"}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Flex>
      </div>
    );
  };
  
  export default AdminAddProduct;