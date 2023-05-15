import { VStack, Img, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/bitcoinhome.png'
import Services from './Services'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <VStack bgColor={'blackAlpha.900'} width={'full'} height={'95vh'} spacing={'3'} justifyContent={'center'} borderBottom={'1px solid gray'}>
        <motion.div style={{
          width: '28vw',
        }} animate={{
          translateY: '15px'
        }} 
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }} >
        <Img src={img}  w={'100%'} transform={'rotateZ(-13deg)'} filter={'grayscale(1)'} />
        </motion.div>
        <Text fontSize={['3xl', '4xl', '6xl']} textAlign={'center'} fontWeight={'bold'} color={'white'}>CryptoGraphix</Text>
        <Text fontSize={['smaller', 'sm', 'lg']} fontWeight={'200'} color={'white'} w={'80%'} textAlign={'center'}>Visualize the trends, patterns, and movements of cryptocurrencies with our state-of-the-art real-time graphs. Dive deep into market analysis, track price fluctuations, and seize opportunities as they unfold. Gain a competitive edge by accessing up-to-the-minute data that keeps you at the forefront of the crypto landscape.</Text>
      </VStack>
      <Services />
    </>
  )
}
