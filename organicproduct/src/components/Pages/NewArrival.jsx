import React, { useEffect, useState } from "react";
// import { arrivalData } from "../Data/Data";
import Style from "../Styles/card.module.css";
import Product from "./Product";
import SideBar from "./SideBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  handleProaductFailure,
  handleProaductRequest,
  handleNewArrivalProaductSucessfull,
} from "../../Redux/Products/action";
import Loader from "./Loader";

export default function NewArrival() {
  const { newProduct, isLoading } = useSelector((a) => a.ProductReducer);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();
  async function getArrivalData(page) {
    dispatch(handleProaductRequest());
    try {
      const res = await axios.get(
        `https://braveorganic.onrender.com/products?mainCat=newArrival&page=${page}`
      );
      setTotalPage(res.data.prod);
      dispatch(handleNewArrivalProaductSucessfull(res.data.data));
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
      {newProduct.length > 0 && (
        <Product
          name={"New Arrivals"}
          data={newProduct}
          cat="newarrival"
          current={page}
          setPage={setPage}
          totalPage={totalPage}
        />
      )}
    </div>
  );
}
