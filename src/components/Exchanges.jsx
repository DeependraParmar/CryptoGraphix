import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Container, HStack, Heading, Img, Text, VStack,Button } from '@chakra-ui/react';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);


  const changePageNext = (page) => {
    setPage(page+1);
    setLoading(true);
  }
  const changePagePrevious = (page) => {
    setPage(page-1);
    setLoading(true);
  }

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges?page=${page}`);
        setExchanges(data);
        setLoading(false);
      }
      catch (error) {
        setLoading(true);
        setError(true);
        console.log(error);
      }
    }
    fetchExchanges();
  }, [page]);

  if (error) {
    return <ErrorComponent message={'Error while fetching Exchanges'} />
  }

  return (
    <Container maxWidth={'container.xl'} py={'8'}>
      {loading ? <Loading /> : (
        <>
          <HStack wrap={'wrap'} alignItems={'center'} justifyContent={'center'} >
            {
              exchanges.map((i) => (
                <ExchangeCard name={i.name} image={i.image} rank={i.trust_score_rank} url={i.url} key={i.id} />
              ))
            }
          </HStack>
          <HStack alignItems={'center'} justifyContent={'center'} my={'12'} >
            <Button variant={'solid'} backgroundColor={'#2668ed'} color={'white'} onClick={() => changePagePrevious(page)}>Previous</Button>
            <Button variant={'solid'} backgroundColor={'#2668ed'} color={'white'} onClick={() => changePageNext(page)}>Next</Button>
          </HStack>
        </>
      )}
      
    </Container>
    
  );
};


const ExchangeCard = ({name, image, rank, url}) => (
  <a href={url} target='blank' rel='noopener noreferrer'>
    <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s ease-in-out'} margin={'4'} css={{
      "&:hover": {transform: "scale(1.1)"}
      }} >
      <Img src={image} w={'10'} h={'10'} objectFit={'contain'} alt='image here' />
      <Heading size={'md'} noOfLines={'1'} >{rank}</Heading>
      <Text noOfLines={'1'}  > {name}</Text>
    </VStack>
  </a>
);