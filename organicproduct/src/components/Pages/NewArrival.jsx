import React from "react";
import { arrivalData } from "../Data/Data";
import Style from "../Styles/card.module.css";
import Product from "./Product";
import SideBar from "./SideBar";
import axios from 'axios';

export default function NewArrival() {
  async function getArrivalData() {
    const res = await axios.get("http://localhost:8080/products");
    console.log(res);
  }
  getArrivalData();
  return (
    <div className={Style.mainDiv}>
      <SideBar />
      <Product name={"New Arrivals"} data={arrivalData} />
    </div>
  );
}
