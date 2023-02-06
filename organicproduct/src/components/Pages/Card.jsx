import React, { useRef, useState } from "react";
import Styles from "../Styles/subProduct.module.css"
// import {AiFillHeart} from "react-icons/ai"
import {BiHeart} from "react-icons/bi"

export default function Items() {
    const [quty, setquty]=useState(1);
  const ref=useRef(null);
//   function onHover(){
//     ref.current.src=itemsData.img2;
//   }
//   function outHover(){
//     ref.current.src=itemsData.img1;
//   }

  
  return (
         <>
         <div className={Styles.topImg}>
         <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1_5-Offer-Desktop-Upsell-V1_1200x.jpg?v=1671099969" alt="" /></div>
        
      <div className={Styles.singleItem}>
    <div className={Styles.main}>
      <div>
        <img src={itemsData.img1} alt="pic1" ref={ref}/>
        <div>
            <div>
                <p>#1</p>
                <p>BEST SELLER</p> 
            </div>
            <div>
                <p>32% OFF</p>
            </div>
        </div>
        {/* <p>♡</p> */}
        <BiHeart className={Styles.heart}/>
        {/* <AiFillHeart/> */}
      </div>
      {/* <div> */}
        
    <div>
        <img src={itemsData.img1} alt="" onClick={()=>{ref.current.src=itemsData.img1}}/>
        <img src={itemsData.img2} alt=""  onClick={()=>{ref.current.src=itemsData.img2}}/>
        <img src={itemsData.img3} alt=""  onClick={()=>{ref.current.src=itemsData.img3}}/>
        <img src={itemsData.img4} alt=""  onClick={()=>{ref.current.src=itemsData.img4}}/>
    </div>
    </div>
    
    <div className={Styles.main1}>
        <div>
          <h2>{itemsData.heading}</h2>
          <p>{itemsData.disc}</p>
        </div>
        <div>
          <div>
            <p>-{itemsData.disscount}%</p>
            <p>₹{itemsData.price}</p>
          </div>
           <p>{itemsData.rating}★</p>
        {/* </div> */}
      </div>
      <div>
        <p>M.R.P.: <span>₹{itemsData.MRP}</span></p>
        <p>Inclusive of all taxes</p>
      </div>
      <div>
        <button onClick={()=>setquty(quty-1)} disabled={quty==1}>-</button>
        <button>{quty}</button>
        <button onClick={()=>setquty(quty+1)} disabled={quty==5}>+</button>
      </div>
      <button>ADD TO CART</button>
      </div>
      </div></>
  );
}
const itemsData={
      img1: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_765x.jpg?v=1652421642",
      img2: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/188_765x.jpg?v=1668167835",
      img3: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_765x.jpg?v=1652421642",
      img4: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/188_765x.jpg?v=1668167835",
      disc: "Eau De Parfum",
      type: "Best",
      price: 575,
      MRP: 849,
      rating: 4.6,
      disscount: 32,
      heading: "Luxury Perfume Gift Set For Man - 4x20ml",
    }