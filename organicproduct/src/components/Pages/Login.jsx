import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  handleLoginFailure,
  handleLoginRequest,
  handleLoginSuccessfull,
} from "../../Redux/Register/action";
import Style from "../Styles/login.module.css";

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const { state } = useLocation();
  const { isLogin, isUser } = useSelector((e) => e.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [userData, setUserData] = useState(initialState);
  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const submitLoginData = async (e) => {
    e.preventDefault();
    dispatch(handleLoginRequest());
    try {
      const allUser = await fetch(
        "https://braveorganic.onrender.com/user/login",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await allUser.json();
      if (result.isLogin) {
        dispatch(handleLoginSuccessfull(result));
        toast({
          title: "Login Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        localStorage.setItem("brave_user", JSON.stringify(result.user));
        localStorage.setItem("brave_token", JSON.stringify(result.Token));
        localStorage.setItem("brave_isLogin", result.isLogin);
      } else {
        if (result.message === "wrongPassword") {
          toast({
            title: "Please enter a valid Password",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else if (result.message === "notRegistered") {
          toast({
            title: "Not Registered, Please create an account",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }
      }
    } catch (err) {
      dispatch(handleLoginFailure());
    }
  };
  useEffect(() => {
    if (isLogin) {
      if (state === null) {
        if (isUser.role === "admin") navigate("/admin");
        else navigate("/");
      } else {
        navigate(state.from, { replace: true });
      }
    }
  }, [isLogin]);

  return (
    <Box className={Style.mainDiv} w={{lg:"35%", md:"70%", base:"90%"}}>
      <Box>
        <Text as="h1">Login</Text>
        <Text as="p" fontSize={{lg:"1.25rem", md:"1.25rem", base:"1rem"}}>To redeem your cashback you must be logged in</Text>
      </Box>
      <Box className={Style.form}>
        <FormControl isRequired>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => handleLoginData(e)}
            name="email"
            value={userData.email}
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={(e) => handleLoginData(e)}
          />
        </FormControl>
        <Link href="#">Forgot your password?</Link>
        <Button
          onClick={submitLoginData}
          id={userData.email && userData.password ? "" : Style.createBtn}
        >
          Sign in
        </Button>
      </Box>
      <br />
      <Link to={"/signup"}>create account</Link>
    </Box>
  );
}
