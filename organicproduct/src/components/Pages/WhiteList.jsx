import React from 'react'
import Styles from "../Styles/whiteList.module.css"

export default function WhiteList() {
  return (
    <div className={Styles.mainDiv}>
      <div><h1>MY FAVOURITES</h1></div>
      <div>
      <div className={Styles.whtList}>
      <div>
            <img src={item.img1} alt="image" />
        </div>
        <div>
            <div>
            <h3>{item.heading}</h3>
            <p>{item.disc}</p>
            <p>Rs.{item.price}</p>
            </div>
            <div>
            <button>Move to Cart</button>
            <button>Remove</button>
            </div>
        </div>
    </div>
      </div>
    </div>
  )
}

const item={
    img1: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_765x.jpg?v=1652421642",
    img2: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/188_765x.jpg?v=1668167835",
    disc: "Eau De Parfum",
    type: "Best",
    price: 575,
    MRP: 849,
    rating: 4.6,
    disscount: 32,
    heading: "Luxury Perfume Gift Set For Man - 4x20ml",
  }