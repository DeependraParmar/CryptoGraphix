import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <HStack backgroundColor={'white'} p={'4'} justifyContent={'space-around'} wrap={['wrap','wrap','wrap']}>
        <Box textAlign={'left'}>
          <Logo color='black' />
          
        </Box>
        <Box display={'flex'} gap={'2'} alignItems={'center'} >
          <Text my={'2'} fontSize={'smaller'}>CryptoGraphix @ All Rights Reserved 2023-27</Text>
            <a href="https://github.com/DeependraParmar" target='blank'><AiFillGithub size={'24'} /></a>
            <a href="https://instagram.com/_deependra.parmar" target='blank'><AiFillInstagram size={'24'} /></a>
            <a href="https://youtube.com/@learnlogics" target='blank'><AiFillYoutube size={'24'} /></a>
            <a href="https://linkedin.com/in/deependraparmar" target='blank'><AiFillLinkedin size={'24'} /></a>
        </Box>
      </HStack>
    </>
  )
}
