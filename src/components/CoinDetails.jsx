import { Badge, Box, Button, Container, HStack, Img, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';

export default function CoinDetails() {
  const [coin, setCoins] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol = currency === "inr" ? "₹" : currency === 'eur' ? "€" : "$";
  const params = useParams();
  const btns = ['24H','7D','14D','30D','60D','200D','365D'];

  const changeChart = (item) => {
    setLoading(true);
    setDays(item);
  }

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
        const { data:chartData } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        console.log(chartData);
        setCoins(data);
        setChartArray(chartData.prices);
        setLoading(false);
      }
      catch (error) {
        setLoading(true);
        setError(true);
      }
    }
    fetchCoinDetails();
  }, [params.id,days,currency]);

  if (error) {
    return <ErrorComponent message={'Error while fetching Coins Details'} />
  }

  return (
    <>
      <Container maxW={'container.xl'}>
        {loading ? <Loading /> : (
          <>
            <Box w={'full'} borderWidth={'0.5'} p={'8'} overflowX={'auto'}>
                <Chart arr={chartArray} currency={currencySymbol} days={days}  />
            </Box>
            <HStack p={'8'} justifyContent={'center'}>
              {btns.map((item,index)=>(
                <Button color='rgb(20, 88, 224)' fontSize={'sm'} variant={'solid'} onChange={()=>setCurrency} onClick={()=>changeChart(item)}>{item}</Button>
              ))}
            </HStack>

            <RadioGroup value={currency} onChange={setCurrency} m={'auto'} w={'fit-content'} my={'6'} >
              <HStack spacing={'4'}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>

          <VStack spacing={'4'} p={'8'} alignItems={'flex-start'} > 
              <Text fontSize={'small'} alignSelf={'center'} opacity={0.7}>
                Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>

              <Img src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'} />
              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
                <StatHelpText>
                  <StatArrow type={coin.market_data.price_change_percentage_24h>0?"increase":"decrease"}/>{coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
              <Badge fontSize={'2xl'} backgroundColor={'blackAlpha.800'} color={'white'}>{`#${coin.market_cap_rank}`}</Badge>

              <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />

              <Box w={'full'} textAlign={'left'}>
                  <Item title={"Max Supply:"} value={coin.market_data.max_supply?coin.market_data.max_supply:"NA"}  />
                <Item title={"Circulating Supply:"} value={coin.market_data.circulating_supply ? coin.market_data.circulating_supply:"NA"}  />
                <Item title={"Market Capital:"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}  />
                <Item title={"All Time Low:"} value={`${currencySymbol}${coin.market_data.atl[currency]}`}  />
                <Item title={"All Time Low:"} value={`${currencySymbol}${coin.market_data.ath[currency]}`}  />
              </Box>
          </VStack>
          </>
        )}
      </Container>
    </>
  )
}

const Item = ({title,value}) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontSize={'sm'}>{title}</Text>
    <Text fontSize={'sm'} fontWeight={'500'}>{value}</Text>
  </HStack>
)
const CustomBar = ({high,low}) => (
  <VStack w={'full'}>
    <Progress value={50} color='rgb(20, 88, 224)' w='full' />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Text fontSize={'10'} fontWeight={'600'}>24 Hour Range</Text>
        <Badge children={low} colorScheme='red' />
        <Badge children={high} colorScheme='green' />
    </HStack>
  </VStack>
)
