import React from "react";
import { Route, Routes } from "react-router-dom";
// import About from "./About";
import Bestsellers from "./Bestsellers";
import Card from "./Card";
// import Card from './Card'
import CreateAccount from "./CreateAccount";
import Landing from "./Landing";
import Login from "./Login";
import NewArrival from "./NewArrival";
import ShopAll from "./ShopAll";
import WhiteList from "./WhiteList";
// import { ChakraProvider } from "@chakra-ui/react";
export default function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/bestsellers"} element={<Bestsellers />} />
        <Route path={"/newarrival"} element={<NewArrival />} />
        <Route path={"/newarrival/:id"} element={<Card />} />
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
        <Route path={"/WhiteList"} element={<WhiteList />} />
        <Route path={"/card"} element={<Card />} />
      </Routes>
    </div>
  );
}
