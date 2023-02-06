import React from 'react'
import Product from './Product'
import SideBar from './SideBar'
import { bestSeller } from '../Data/Data'
import Style from "../Styles/card.module.css"


export default function ShopAll() {
  return (
    <div className={Style.mainDiv}>
      <SideBar/>
      <Product name={"All Product"} data={bestSeller}/>
    </div>
  )
}
