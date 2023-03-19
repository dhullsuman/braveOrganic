import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export default function Paginate({current,totalPage,setPage }) {
  return (
      <Box display="flex" w="100%" alignItems="center" justifyContent="center" gap="10px" m="10px 0">
          <Button onClick={() => setPage(current-1)} isDisabled={current===1?true:false} bg="rgb(59,77,62)" color="white" _hover={{bg:"rgb(59,77,62)"}}>Previus</Button>
          <Button bg="rgb(59,77,62)" color="white" _hover={{bg:"rgb(59,77,62)"}}>{ current}</Button>
          <Button onClick={() => setPage(current + 1)} isDisabled={ current===totalPage} bg="rgb(59,77,62)" color="white" _hover={{bg:"rgb(59,77,62)"}}>Next</Button>
    </Box>
  )
}