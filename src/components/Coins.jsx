import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Button, Container, HStack, Radio, RadioGroup} from '@chakra-ui/react';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import Coincard from './Coincard';

export default function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const changePageNext= (page) => {
    setPage(page);
    setLoading(true);
  }
  const changePagePrevious= (page) => {
    setPage(page);
    setLoading(true);
  }
  
  const currencySymbol = currency === "inr" ? "₹" : currency === 'eur' ?"€":"$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      }
      catch (error) {
        setLoading(true);
        setError(true);
      }
    }
    fetchCoins();
  }, [currency,page]);

  if(error){
    return <ErrorComponent message={'Error while fetching Coins'} />
  }
  return (
    <Container maxWidth={'container.xl'}>
      {loading ? <Loading /> : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} m={'auto'} w={'fit-content'} my={'6'} >
          <HStack spacing={'4'}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={'wrap'} alignItems={'center'} justifyContent={'center'} >
            {
              coins.map((i) => (
                <Coincard name={i.name} image={i.image} symbol={i.symbol} price={i.current_price} id={i.id} key={i.id} currencySymbol={currencySymbol} />
              ))
            }
          </HStack>
          <HStack alignItems={'center'} justifyContent={'center'} my={'12'} >
            <Button variant={'solid'} backgroundColor={'#2668ed'} color={'white'} onClick={()=>changePagePrevious(page-1)}>Previous</Button>
            <Button variant={'solid'} backgroundColor={'#2668ed'} color={'white'} onClick={()=>changePageNext(page+1)}>Next</Button>
          </HStack>
        </>
      )}
    </Container>
  );
};

