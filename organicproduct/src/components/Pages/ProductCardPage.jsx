import React, { useRef } from "react";
import Styles from "../Styles/Items.module.css"
// import {AiFillHeart} from "react-icons/ai"
import {BiHeart} from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";

export default function ProductCardPage({itemsData, cat}) {
  // console.log(itemsData)
  const ref = useRef(null);
  const navigate=useNavigate()
  function onHover(){
    ref.current.src=itemsData.img2;
  }
  function outHover(){
    ref.current.src=itemsData.img1;
  }

  
  return (
    <Box id={cat==="home" ? Styles.main:""} className={Styles.main} onMouseOver={onHover} onMouseOut={outHover} onClick={()=>navigate(`/${cat}/${itemsData._id}`)}>
      <Box>
        <img src={itemsData.img1} alt="pic1" ref={ref}/>
        <Box>
          <Box>
            {itemsData.subCat === "best" && <><Text as="p">#1</Text>
            <Text as="p">BEST SELLER</Text></>}
          </Box>
            <Box>
                <Text as="p">32% OFF</Text>
            </Box>
        </Box>
        {/* <p>♡</p> */}
        <BiHeart className={Styles.heart}/>
        {/* <AiFillHeart/> */}
      </Box>
      {/* <div> */}
        <Box>
          <Text as="h4">{itemsData.title}</Text>
          <Text as="p">{itemsData.desc}</Text>
        </Box>
        <Box>
          <Box>
            <Text as="p">₹{itemsData.price}</Text>
            <Text as="p">₹{itemsData.origionalPrice}</Text>
          </Box>
          <Text as="p">{itemsData.rating}★</Text>
        {/* </div> */}
      </Box>
      <Button>ADD TO CART</Button>
    </Box>
  );
}

