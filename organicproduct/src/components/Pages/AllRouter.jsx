import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRequireAuth from "../../Routes/userRequireAuth";
import Bestsellers from "./Bestsellers";
import Cart from "./Cart";
import CreateAccount from "./CreateAccount";
import Landing from "./Landing";
import Login from "./Login";
import NewArrival from "./NewArrival";
import AllOrder from "./Order";
import ShopAll from "./ShopAll";
import SinglePage from "./SinglePage";
import WhiteList from "./WhiteList";
export default function AllRouter() {
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/bestsellers"} element={<Bestsellers />} />
        <Route path={"/newarrival"} element={<NewArrival />} />
        <Route path={"/:main/:id"} element={<SinglePage />} />
        <Route path={"/shopall"} element={<ShopAll />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<CreateAccount />} />
        <Route
          path={"/cart"}
          element={
            <UserRequireAuth>
              <Cart />
            </UserRequireAuth>
          }
        />
        <Route
          path={"/wishlist"}
          element={
            <UserRequireAuth>
              <WhiteList />
            </UserRequireAuth>
          }
        />
        <Route
          path={"/order"}
          element={
            <UserRequireAuth>
              <AllOrder/>
            </UserRequireAuth>
          }
        />
      </Routes>
    </Box>
  );
}
