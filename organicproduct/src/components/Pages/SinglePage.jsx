import React, { useEffect, useRef, useState } from "react";
import Styles from "../Styles/subProduct.module.css"
// import {AiFillHeart} from "react-icons/ai"
import {BiHeart} from "react-icons/bi"
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SinglePage() {
    const [data, setData] = useState({})
    const [quty, setquty]=useState(1);
    const ref = useRef(null);
    const id = useParams();
    // console.log(id);
  async function getArrivalData() {
      try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/products/${id.id}`);
    //   (res.data.data)
          setData(res.data.singleProduct)
    } catch (e) {
    }
  }
  useEffect(() => {
    getArrivalData();
  },[])

  
  return (
         <>
         <div className={Styles.topImg}>
         <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1_5-Offer-Desktop-Upsell-V1_1200x.jpg?v=1671099969" alt="" /></div>
        
      <div className={Styles.singleItem}>
    <div className={Styles.main}>
      <div>
        <img src={data.img1} alt="pic1" ref={ref}/>
        <div>
          <div>
              {data.subCat === "best" &&
                <><p>#1</p>
                <p>BEST SELLER</p></>}
              </div>
            <div>
                <p>{data.Off} OFF</p>
            </div>
        </div>
        {/* <p>♡</p> */}
        <BiHeart className={Styles.heart}/>
        {/* <AiFillHeart/> */}
      </div>
      {/* <div> */}
        
    <div>
        <img src={data.img1} alt="" onClick={()=>{ref.current.src=data.img1}}/>
        <img src={data.img2} alt=""  onClick={()=>{ref.current.src=data.img2}}/>
        <img src={data.img3} alt=""  onClick={()=>{ref.current.src=data.img3}}/>
        <img src={data.img4} alt=""  onClick={()=>{ref.current.src=data.img4}}/>
    </div>
    </div>
    
    <div className={Styles.main1}>
        <div>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </div>
        <div>
          <div>
            <p>-{data.Off}</p>
            <p>₹{data.price}</p>
          </div>
           <p>{data.rating}★</p>
        {/* </div> */}
      </div>
      <div>
        <p>M.R.P.: <span>₹{data.origionalPrice}</span></p>
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
const data={
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