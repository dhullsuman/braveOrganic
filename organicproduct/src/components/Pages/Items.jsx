import React, { useRef } from "react";
import Styles from "../Styles/Items.module.css"
// import {AiFillHeart} from "react-icons/ai"
import {BiHeart} from "react-icons/bi"
import { useNavigate } from "react-router-dom";

export default function Items({itemsData}) {
  const ref=useRef(null);
  const navigate=useNavigate()
  function onHover(){
    ref.current.src=itemsData.img2;
  }
  function outHover(){
    ref.current.src=itemsData.img1;
  }

  
  return (
    <div className={Styles.main} onMouseOver={onHover} onMouseOut={outHover} onClick={()=>navigate(`/newArrival/:${itemsData.id}`)}>
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
          <h4>{itemsData.heading}</h4>
          <p>{itemsData.disc}</p>
        </div>
        <div>
          <div>
            <p>₹{itemsData.price}</p>
            <p>₹{itemsData.MRP}</p>
          </div>
          <p>{itemsData.rating}★</p>
        {/* </div> */}
      </div>
      <button>ADD TO CART</button>
    </div>
  );
}

