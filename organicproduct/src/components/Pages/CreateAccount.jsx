import React from 'react'
import { useState } from 'react'
import Style from "../Styles/login.module.css"
import {useDispatch} from "react-redux"
import { handleRegisterFailure, handleRegisterRequest, handleRegisterSuccessfull } from '../../Redux/Register/action'
import { useNavigate } from 'react-router-dom'

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

  // console.log(userData)
  const handleUserInput = (a) => {
    const { name, value } = a.target;
    setUserData({ ...userData, [name]:value})
    // console.log(name, value)
  }
  const submitUserData = async(event) => {
    event.preventDefault();
    // console.log(userData)
    dispatch(handleRegisterRequest());
    try {
      const user = await fetch("http://localhost:8080/user/register", { method: "POST", body: JSON.stringify(userData), headers: { "Content-Type": "application/json" } })
      const user1 = await user.json()
      dispatch(handleRegisterSuccessfull(user1.message))
      if (user1.message === "IsPresent") {
        alert("Already registered, please login")
      } else {
        alert("Register successful")
        navigate("/login")
      }
      // console.log(user1)
    } catch (err) {
      dispatch(handleRegisterFailure());
}
  }


  return (
    <div>
      <div className={Style.mainDiv}>
      <div>
      <h1>Create account</h1>
      </div>
      <form onSubmit={submitUserData}>
          <input type="text" placeholder='First Name' required value={userData.firstName} name="firstName" onChange={(a)=>handleUserInput(a)} /><br/><br/>
      <input type="text" placeholder='Last Name' required value={userData.lastName} name="lastName" onChange={(a)=>handleUserInput(a)}/><br/><br/>
      <input type="email" placeholder='Email' required value={userData.email} name="email" onChange={(a)=>handleUserInput(a)}/><br/><br/>
      <input type="password" placeholder='Password' required value={userData.password} name="password" minLength={6} onChange={(a)=>handleUserInput(a)}/><br/><br/>
      <button type='submit' id={userData.firstName && userData.lastName && userData.email && userData.password ? "":Style.createBtn}>Create</button>
      </form>
    </div>
    </div>
  )
}
