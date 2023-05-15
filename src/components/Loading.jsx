import React from 'react'
import { Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <>
    
          <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
              width={'12'}
              display={'block'}
              marginX={'auto'}
              my={'50'}
          />
    </>
  )
}
