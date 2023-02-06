import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Styles from "../Styles/product.module.css"
import SingleProductPage from './singleProductPage'

export default function Product({name,data}) {
  const [sorting, setsorting] = useState([...data])
  const [istrue, setisture] = useState(0)
  function sortByPrice(event) {
   
    if (event.target.value === "LTH") {
      const data1 = sorting.sort((a, b) => a.price - b.price);
      setisture(1)
      setsorting(data1);
    }
    else if (event.target.value === "HTL") {
      const data1 = sorting.sort((a, b) => b.price - a.price);
      setisture(2)
      setsorting(data1);
    }
    else {
      setisture(3)
      setsorting(data);
    }
  }
//  console.log(process.env.REACT_APP_URL)
  useEffect(() => {
    setisture(0)
  },[sorting, istrue])
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
      <div>{sorting.map((elem)=><SingleProductPage key={elem.id} itemsData={elem}/>)}</div>
    </div>
  )
}
