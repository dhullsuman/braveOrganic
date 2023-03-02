import React from 'react'
import { useState } from 'react'
import Style from "../Styles/login.module.css"
import {useDispatch} from "react-redux"
import { handleRegisterFailure, handleRegisterRequest, handleRegisterSuccessfull } from '../../Redux/Register/action'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, Input, Text, useToast } from '@chakra-ui/react'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password:"",
}

export default function CreateAccount() {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const toast = useToast();

  // console.log(userData)
  const handleUserInput = (a) => {
    const { name, value } = a.target;
    setUserData({ ...userData, [name]:value})
    // console.log(name, value)
  }
  const submitUserData = async() => {
    dispatch(handleRegisterRequest());
    try {
      const user = await fetch("http://localhost:8080/user/register", { method: "POST", body: JSON.stringify(userData), headers: { "Content-Type": "application/json" } })
      const user1 = await user.json()
      dispatch(handleRegisterSuccessfull(user1.message))
      if (user1.message === "IsPresent") {
        toast({
          title: "Already registered",
          description:"Please Login",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Register successful.",
          description:"Please Login",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/login")
      }
    } catch (err) {
      dispatch(handleRegisterFailure());
}
  }


  return (
    <Box>
      <Box className={Style.mainDiv}>
      <Box>
          <Text as="h1">Create account</Text>
      </Box>
        <Box className={Style.form}>
          <FormControl isRequired>

          <Input type="text" placeholder='First Name' required value={userData.firstName} name="firstName" onChange={(a)=>handleUserInput(a)} />
          </FormControl>
          <FormControl isRequired>

      <Input type="text" placeholder='Last Name' required value={userData.lastName} name="lastName" onChange={(a)=>handleUserInput(a)}/>
          </FormControl>
          <FormControl isRequired>

      <Input type="email" placeholder='Email' required value={userData.email} name="email" onChange={(a)=>handleUserInput(a)}/>
          </FormControl>
          <FormControl isRequired>

      <Input type="password" placeholder='Password' required value={userData.password} name="password" minLength={6} onChange={(a)=>handleUserInput(a)}/>
          </FormControl>
          <Button id={userData.firstName && userData.lastName && userData.email && userData.password ? "" : Style.createBtn} onClick={ submitUserData}>Create</Button>
      </Box>
    </Box>
    </Box>
  )
}
