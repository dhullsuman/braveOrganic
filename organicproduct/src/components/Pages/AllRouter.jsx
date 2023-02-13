import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRequireAuth from "../../Routes/userRequireAuth";
// import About from "./About";
import Bestsellers from "./Bestsellers";
// import Card from './Card'
import CreateAccount from "./CreateAccount";
import Landing from "./Landing";
import Login from "./Login";
import NewArrival from "./NewArrival";
import ShopAll from "./ShopAll";
import SinglePage from "./SinglePage";
import WhiteList from "./WhiteList";
export default function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/bestsellers"} element={<Bestsellers />} />
        <Route path={"/newarrival"} element={<NewArrival />} />
        <Route path={"/:main/:id"} element={<SinglePage />} />
        <Route path={"/shopall"} element={<ShopAll />} />
        {/* <Route
          path={"/about"}
          element={
            <ChakraProvider>
              <About />
            </ChakraProvider>
          }
        /> */}
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<CreateAccount />} />
        <Route path={"/whitelist"} element={<UserRequireAuth><WhiteList /></UserRequireAuth>} />
        {/* <Route path={"/card"} element={<Card />} /> */}
      </Routes>
    </div>
  );
}
