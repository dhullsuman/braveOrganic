import { Box, Select, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Styles from "../Styles/product.module.css"
import ProductCardPage from './ProductCardPage'

export default function Product({ name, data, cat }) {
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
  }, [sorting, istrue])
  useEffect(() => {
    setsorting([...data])

  },[])
  return (
    <Box className={Styles.mainDiv}>
      <Box>
        <Box >
            <Text as="h2">#{name}</Text>
        </Box>
        <Box>
            <Text as="p">Sort by</Text>
            <Select onChange={sortByPrice} w={{lg:"40%",md:"50%"}} bg='rgb(59, 77, 62)'
            borderColor='rgb(59, 77, 62)' size="sm" fontWeight="bold" appearance= "none" color="white" borderRadius={3}>
                <option value="featured" style={{ color: 'white',backgroundColor:"rgb(59,77,62)", borderRadius:0}}>General</option>
                <option value="HTL" style={{ color: 'white',backgroundColor:"rgb(59,77,62)",borderRadius:0}}>High to Low</option>
                <option value="LTH" style={{ color: 'white',backgroundColor:"rgb(59,77,62)",borderRadius:0}}>Low to High</option>
            </Select>
        </Box>
      </Box>
      <Box>{sorting.map((elem) => <ProductCardPage key={elem._id} itemsData={elem} cat={cat} />)}</Box>
    </Box>
  )
}
