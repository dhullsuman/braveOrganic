import React, { useEffect } from 'react'
import Product from './Product'
import SideBar from './SideBar'
import Style from "../Styles/card.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { handleProaductFailure, handleProaductRequest, handleShopProaductSucessfull } from '../../Redux/Products/action'
import axios from 'axios'
import { Box } from '@chakra-ui/react'


export default function ShopAll() {
  const shopProduct = useSelector((a)=>a.ProductReducer.shopProduct)
  const dispatch = useDispatch();
  async function getArrivalData() {
    dispatch(handleProaductRequest())
    try {
      const res = await axios.get(`http://localhost:8080/products?mainCat=shopall`);
      dispatch(handleShopProaductSucessfull(res.data.data))
    } catch (e) {
      dispatch(handleProaductFailure())
    }
  }
  useEffect(() => {
    getArrivalData();
  },[])
  return (
    <Box className={Style.mainDiv}>
      <SideBar/>
      {shopProduct.length>0 && <Product name={"All Product"} data={shopProduct} cat="shopall"/>}
    </Box>
  )
}
