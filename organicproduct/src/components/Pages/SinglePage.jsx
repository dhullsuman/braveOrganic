import React, { useEffect, useRef, useState } from "react";
import Styles from "../Styles/subProduct.module.css"
// import {AiFillHeart} from "react-icons/ai"
import {BiHeart} from "react-icons/bi"
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Button, Image, Text } from "@chakra-ui/react";

export default function SinglePage() {
    const [data, setData] = useState({})
    const [quty, setquty]=useState(1);
    const ref = useRef(null);
    const id = useParams();
    // console.log(id);
  async function getArrivalData() {
      try {
      const res = await axios.get(`http://localhost:8080/products/${id.id}`);
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
         <Box className={Styles.topImg}>
         <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1_5-Offer-Desktop-Upsell-V1_1200x.jpg?v=1671099969" alt="" /></Box>
        
      <Box className={Styles.singleItem}>
    <Box className={Styles.main}>
      <Box>
        <Image src={data.img1} alt="pic1" ref={ref}/>
        <Box>
          <Box>
              {data.subCat === "best" &&
                <><Text as="p">#1</Text>
                <Text as="p">BEST SELLER</Text></>}
              </Box>
            <Box>
                <Text as="p">{data.Off} OFF</Text>
            </Box>
        </Box>
        {/* <p>♡</p> */}
        <BiHeart className={Styles.heart}/>
        {/* <AiFillHeart/> */}
      </Box>
      {/* <div> */}
        
    <Box>
        <img src={data.img1} alt="" onClick={()=>{ref.current.src=data.img1}}/>
        <img src={data.img2} alt=""  onClick={()=>{ref.current.src=data.img2}}/>
        <img src={data.img3} alt=""  onClick={()=>{ref.current.src=data.img3}}/>
        <img src={data.img4} alt=""  onClick={()=>{ref.current.src=data.img4}}/>
    </Box>
    </Box>
    
    <Box className={Styles.main1}>
        <Box>
          <Text as="h2">{data.title}</Text>
          <Text as="p">{data.desc}</Text>
        </Box>
        <Box>
          <Box>
            <Text as="p">-{data.Off}</Text>
            <Text as="p">₹{data.price}</Text>
          </Box>
           <Text as="p">{data.rating}★</Text>
        {/* </div> */}
      </Box>
      <Box>
        <Text as="p">M.R.P.: <span>₹{data.origionalPrice}</span></Text>
        <Text as="p">Inclusive of all taxes</Text>
      </Box>
      <Box>
        <Button onClick={()=>setquty(quty-1)} isDisabled={quty===1}>-</Button>
        <Button>{quty}</Button>
        <Button onClick={()=>setquty(quty+1)} isDisabled={quty===5}>+</Button>
      </Box>
      <Button>ADD TO CART</Button>
      </Box>
      </Box></>
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