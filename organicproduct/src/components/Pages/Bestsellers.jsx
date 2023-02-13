import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleBestProaductSucessfull, handleProaductFailure, handleProaductRequest } from '../../Redux/Products/action'
// import { bestSeller } from '../Data/Data'
import Style from "../Styles/card.module.css"
import Product from './Product'
import SideBar from './SideBar'

export default function Bestsellers() {
  const bestProduct = useSelector((a)=>a.ProductReducer.bestProduct)
  const dispatch = useDispatch();
  async function getArrivalData() {
    dispatch(handleProaductRequest())
    try {
      const res = await axios.get(`http://localhost:8080/products?subCat=best`);
      dispatch(handleBestProaductSucessfull(res.data.data))
    } catch (e) {
      dispatch(handleProaductFailure())
    }
  }
  useEffect(() => {
    getArrivalData();
  },[])
  return (
    <div className={Style.mainDiv}>
      <SideBar/>
      {bestProduct.length>0 && <Product name={"BEST SELLERS"} data={bestProduct} cat="bestseller"/>}
    </div>
  )
}
