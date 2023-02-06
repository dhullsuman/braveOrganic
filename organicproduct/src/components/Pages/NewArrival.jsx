import React from 'react'
import { arrivalData } from '../Data/Data'
import Style from "../Styles/card.module.css"
import Product from './Product'
import SideBar from './SideBar'

export default function NewArrival() {
  return (
    <div className={Style.mainDiv}>
      <SideBar/>
      <Product name={"New Arrivals"} data={arrivalData}/>
    </div>
  )
}
