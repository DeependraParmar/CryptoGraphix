import { HStack, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/bitcoin.png';
import { Link } from 'react-router-dom';

export default function Logo({color='white'}) {
  return (
    <>
    <Link to={'/'} marg>
      <HStack>
         <Img src={logo} w={['8','10','12']}/>
         <Heading fontSize={['smaller','small','md']} color={color}>CryptoGraphix</Heading>
        </HStack>
    </Link>
        
    </>
  )
}
