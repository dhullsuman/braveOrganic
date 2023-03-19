import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleBestProaductSucessfull,
  handleProaductFailure,
  handleProaductRequest,
} from "../../Redux/Products/action";
// import { bestSeller } from '../Data/Data'
import Style from "../Styles/card.module.css";
import Loader from "./Loader";
import Product from "./Product";
import SideBar from "./SideBar";

export default function Bestsellers() {
  const { bestProduct, isLoading } = useSelector((a) => a.ProductReducer);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();
  async function getArrivalData(page) {
    dispatch(handleProaductRequest());
    try {
      const res = await axios.get(
        `https://braveorganic.onrender.com/products?subCat=best&page=${page}`
      );
      setTotalPage(res.data.prod);
      dispatch(handleBestProaductSucessfull(res.data.data));
    } catch (e) {
      dispatch(handleProaductFailure());
    }
  }

  useEffect(() => {
    getArrivalData(page);
  }, [page]);
  if (isLoading) return <Loader />;
  return (
    <div className={Style.mainDiv}>
      <SideBar />
      {bestProduct.length > 0 && (
        <Product
          name={"BEST SELLERS"}
          data={bestProduct}
          cat="bestseller"
          current={page}
          setPage={setPage}
          totalPage={totalPage}
        />
      )}
    </div>
  );
}
