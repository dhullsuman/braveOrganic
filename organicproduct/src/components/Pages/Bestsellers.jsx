import React from 'react'
import { bestSeller } from '../Data/Data'
import Style from "../Styles/card.module.css"
import Product from './Product'
import SideBar from './SideBar'

export default function Bestsellers() {
  return (
    <div className={Style.mainDiv}>
      <SideBar/>
      <Product name={"ALL PRODUCTS"} data={bestSeller}/>
    </div>
  )
}
