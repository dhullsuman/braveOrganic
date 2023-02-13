import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { handleLoginFailure, handleLoginRequest, handleLoginSuccessfull } from '../../Redux/Register/action'
import Style from "../Styles/login.module.css"

const initialState = {
  email: "",
  password: "",
}

export default function Login() {
  const {state}=useLocation()
  const isLogin = useSelector((e)=>e.userReducer.isLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialState)
  const handleLoginData = (e) => {
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
  }
  const submitLoginData = async (e) => {
    e.preventDefault()
    dispatch(handleLoginRequest())
    try {
      const allUser = await fetch("http://localhost:8080/user/login", { method: 'POST', body: JSON.stringify(userData), headers: { 'Content-Type': 'application/json' } })
      const result= await allUser.json()
      if (result.isLogin) {
        // console.log(result)
        dispatch(handleLoginSuccessfull(result))
        alert("Login successful")
        localStorage.setItem("user", JSON.stringify(result))
        // navigate("/")
      } else {
        if (result.message === "wrongPassword") {
          alert("Please enter a valid password")
        } else if(result.message === "notRegistered") {
          alert("Not Registered, Please create a new account")
        }
      }
      // console.log(result)
    } catch (err) {
      dispatch(handleLoginFailure())
    }
    // console.log(userData)
  }
  // console.log(state)
  useEffect(() => {
    if (isLogin) {
      if (state === null) {
        navigate("/")
      } else {
        navigate(state.from,{replace:true})
      }
    }
  },[isLogin])
//   if (isLogin) {
//   return <Navigate to={state.from}/>
// }

  return (
    <Box className={Style.mainDiv}>
      <Box>
      <Text as="h1">Login</Text>
      <Text as="p">To redeem your cashback you must be logged in</Text>
      </Box>
      <Box className={Style.form}>
      <FormControl isRequired>
      <Input type="email" placeholder='Email' onChange={(e)=>handleLoginData(e)} name="email" value={userData.email} /></FormControl>
        <FormControl isRequired>
        <Input type="password" placeholder='Password' name="password" value={userData.password}  onChange={(e)=>handleLoginData(e)} /></FormControl>
      <a href="#">Forgot your password?</a>
      <Button onClick={submitLoginData} id={userData.email && userData.password ? "" : Style.createBtn}>Sign in</Button>
      </Box><br/>
      <Link to={"/signup"}>create account</Link>
    </Box>
  )
}
