import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Style from "../Styles/login.module.css"

const initialState = {
  email: "",
  password: "",
}

export default function Login() {
  const [userData, setUserData] = useState(initialState)
  const handleLoginData = (e) => {
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
  }
  const submitLoginData = (e) => {
    e.preventDefault()
    console.log(userData)
  }

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
