import React, { useEffect, useState } from "react";
import Product from "./Product";
import SideBar from "./SideBar";
import Style from "../Styles/card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  handleProaductFailure,
  handleProaductRequest,
  handleShopProaductSucessfull,
} from "../../Redux/Products/action";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Loader from "./Loader";

export default function ShopAll() {
  const {shopProduct,isLoading} = useSelector((a) => a.ProductReducer);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();
  async function getArrivalData(page) {
    dispatch(handleProaductRequest());
    try {
      const res = await axios.get(
        `https://braveorganic.onrender.com/products?mainCat=shopall&page=${page}`
      );
      setTotalPage(res.data.prod);
      dispatch(handleShopProaductSucessfull(res.data.data));
    } catch (e) {
      dispatch(handleProaductFailure());
    }
  }
  useEffect(() => {
    getArrivalData(page);
  }, [page]);
  if (isLoading) {
    return <Loader/>
  }
  return (
    <Box className={Style.mainDiv}>
      <SideBar />
      {shopProduct.length > 0 && (
        <Product name={"All Product"} data={shopProduct} cat="shopall" current={page} setPage={ setPage} totalPage={totalPage}/>
      )}
    </Box>
  );
}