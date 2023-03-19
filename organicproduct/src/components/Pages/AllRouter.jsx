import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRequireAuth from "../../Routes/AdminRequireAuth";
import UserRequireAuth from "../../Routes/userRequireAuth";
import ErrorPage from "./404Page";
import AdminAddPoductPage from "./AdminAddProduct";
import AdminAllProducts from "./AdminAllProducts";
import AdminDshboard from "./AdminDashboard";
import AdminUpdateProduct from "./AdminUpdateProducts";
import AdminShowUser from "./AdminUser";
import Bestsellers from "./Bestsellers";
import Cart from "./Cart";
import CreateAccount from "./CreateAccount";
import Footer from "./Footer";
import Landing from "./Landing";
import Login from "./Login";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";
import AllOrder from "./Order";
import ShopAll from "./ShopAll";
import SinglePage from "./SinglePage";
import WhiteList from "./WhiteList";
export default function AllRouter() {
  return (
    <Box>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Navbar />
              <Landing />
              <Footer />
            </>
          }
        />
        <Route
          path={"/bestsellers"}
          element={
            <>
              <Navbar />
              <Bestsellers />
              <Footer />
            </>
          }
        />
        <Route
          path={"/newarrival"}
          element={
            <>
              <Navbar />
              <NewArrival />
              <Footer />
            </>
          }
        />
        <Route
          path={"/:main/:id"}
          element={
            <>
              <Navbar />
              <SinglePage />
              <Footer />
            </>
          }
        />
        <Route
          path={"/shopall"}
          element={
            <>
              <Navbar />
              <ShopAll />
              <Footer />
            </>
          }
        />
        <Route
          path={"/login"}
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path={"/signup"}
          element={
            <>
              <Navbar />
              <CreateAccount />
              <Footer />
            </>
          }
        />
        <Route
          path={"*"}
          element={
            <>
              <Navbar />
              <ErrorPage />
              <Footer />
            </>
          }
        />

        <Route
          path={"/cart"}
          element={
            <UserRequireAuth>
              <Navbar />
              <Cart />
              <Footer />
            </UserRequireAuth>
          }
        />
        <Route
          path={"/wishlist"}
          element={
            <UserRequireAuth>
              <Navbar />
              <WhiteList />
              <Footer />
            </UserRequireAuth>
          }
        />
        <Route
          path={"/order"}
          element={
            <UserRequireAuth>
              <Navbar />
              <AllOrder />
              <Footer />
            </UserRequireAuth>
          }
        />
        {/* admin */}
        <Route path="/admin" element={<AdminRequireAuth><AdminDshboard /></AdminRequireAuth>} />
        <Route path="/admin/product" element={<AdminRequireAuth><AdminAllProducts /></AdminRequireAuth>} />
        <Route path="/admin/addProduct" element={<AdminRequireAuth><AdminAddPoductPage /></AdminRequireAuth>} />
        <Route path="/admin/update/:id" element={<AdminRequireAuth><AdminUpdateProduct /></AdminRequireAuth>} />
        <Route path="/admin/user" element={<AdminRequireAuth><AdminShowUser/> </AdminRequireAuth>}/>
      </Routes>
    </Box>
  );
}