import React from 'react'
import { Link } from 'react-router-dom'
import {Heading, Img, Text, VStack } from '@chakra-ui/react';


export default function Coincard({id,name,symbol,image,price,currencySymbol="₹"}) {
  return (
    <>
          <Link to={`/coin/${id}`}>
              <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s ease-in-out'} margin={'4'} css={{
                  "&:hover": { transform: "scale(1.1)" }
              }} >
                  <Img src={image} w={'10'} h={'10'} objectFit={'contain'} alt='image here' />
                  <Heading size={'md'} noOfLines={'1'} >{symbol}</Heading>
                  <Text noOfLines={'1'}  > {name}</Text>
                  <Text noOfLines={'1'}  > {price? `${currencySymbol}${price}`:"NA"}</Text>
              </VStack>
          </Link>

    </>
  )
}
