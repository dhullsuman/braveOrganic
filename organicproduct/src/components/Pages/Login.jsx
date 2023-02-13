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
    <div className={Style.mainDiv}>
      <div>
      <h1>Login</h1>
      <p>To redeem your cashback you must be logged in</p>
      </div>
      <form onSubmit={submitLoginData}>
      <input type="email" placeholder='Email' onChange={(e)=>handleLoginData(e)} name="email" value={userData.email} required/><br/><br/>
        <input type="password" placeholder='Password' name="password" value={userData.password} required onChange={(e)=>handleLoginData(e)} /><br/><br/>
      <a href="#">Forgot your password?</a><br/>
      <button type="submit" id={userData.email && userData.password ? "" : Style.createBtn}>Sign in</button>
      </form><br/>
      <Link to={"/signup"}>create account</Link>
    </div>
  )
}
