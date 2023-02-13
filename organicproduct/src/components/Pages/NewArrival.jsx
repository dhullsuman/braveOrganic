import React, { useEffect, useState } from "react";
// import { arrivalData } from "../Data/Data";
import Style from "../Styles/card.module.css";
import Product from "./Product";
import SideBar from "./SideBar";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { handleProaductFailure, handleProaductRequest, handleNewArrivalProaductSucessfull } from "../../Redux/Products/action";

export default function NewArrival() {
  const newProduct = useSelector((a)=>a.ProductReducer.newProduct)
  const dispatch = useDispatch();
  async function getArrivalData() {
    dispatch(handleProaductRequest())
    try {
      const res = await axios.get(`http://localhost:8080/products?mainCat=newArrival`);
      dispatch(handleNewArrivalProaductSucessfull(res.data.data))
    } catch (e) {
      dispatch(handleProaductFailure())
    }
  }
  useEffect(() => {
    getArrivalData();
  },[])
  return (
    <div className={Style.mainDiv}>
      <SideBar />
      {newProduct.length>0 && <Product name={"New Arrivals"} data={newProduct} cat="newarrival" />}
    </div>
  );
}
