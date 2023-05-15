import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
    return (
        <>
            <HStack py={'2'} px={'4'} shadow={'base'} bgColor={'blackAlpha.700'} w={'full'} gap={'4'} justifyContent={['space-between','space-around']} position={'sticky'} top={'0'} zIndex={'10'}>
                <Logo />
                <Box display={'flex'} gap={['2','3','4']} >
                    <Button variant={'link'}  color={'white'} fontSize={['smaller','small','md']}>
                        <Link to='/' >Home</Link>
                    </Button>
                    <Button variant={'link'} color={'white'} fontSize={['smaller','small','md']}>
                        <Link to='/coins' >Coins</Link>
                    </Button>
                    <Button variant={'link'} color={'white'} fontSize={['smaller','small','md']}>
                        <Link to='/exchanges' >Exchanges</Link>
                    </Button>
                </Box>
            </HStack>
        </>
    )
}
