import React from 'react'
import { useState } from 'react';
import Styles from "../Styles/product.module.css"
import Items from './Items'

export default function Product({name,data}) {
  const [sorting, setsorting]=useState(data)
  function sortByPrice(event){
   
    switch(event.target.value){
      case "LTH": const data1= sorting.sort((a,b)=>a.price-b.price);
      console.log(data1)
      setsorting(data1);
      break;
      case "HTL": const data2= sorting.sort((a,b)=>b.price-a.price);
      console.log(data2)
      setsorting(data2);
      break;
      case "feature": const data3=data;
      console.log(data3)
      setsorting(data3);
      break;
    }
    // data= data.sort((a,b)=>a.price-b.price)
  }
  return (
    <div className={Styles.mainDiv}>
      <div>
        <div>
            <h2>#{name}</h2>
        </div>
        <div>
            <label htmlFor="">Sort by</label>
            <select onChange={sortByPrice}>
                <option value="featured">Featured</option>
                <option value="HTL">High to Low</option>
                <option value="LTH">Low to High</option>
            </select>
        </div>
      </div>
      <div>{sorting.map((elem)=><Items itemsData={elem}/>)}</div>
    </div>
  )
}
