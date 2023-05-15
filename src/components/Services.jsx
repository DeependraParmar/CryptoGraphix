import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Services() {
    return (
        <Box backgroundColor={'blackAlpha.900'} color={'white'} py={'8'}>
            <Text fontSize={['2xl', '3xl', '4xl']}my={'6'} textAlign={'center'} fontWeight={'bold'} color={'white'}>Services</Text>

            <Box fontSize={['smaller', 'sm', 'lg']} fontWeight={'200'} color={'white'} w={'70%'} textAlign={'left'} margin={'auto'}>
            <ul>
                <li>Real-Time Market Data: Access up-to-the-minute data on cryptocurrency exchanges, including live prices, trading volumes, market capitalization, and more. Stay informed about the latest market trends and make well-informed investment decisions.</li><br></br>

                <li>Comprehensive Coin Information: Explore an extensive database of cryptocurrencies, each accompanied by detailed profiles, historical data, key statistics, and essential insights. Gain a deep understanding of individual coins and their potential for growth.</li><br></br>

                <li>Interactive Graphs and Charts: Visualize the performance of cryptocurrencies with our dynamic and interactive graphs and charts. Analyze price movements, track historical trends, and identify patterns to make data-driven decisions.</li><br></br>

                <li>Portfolio Management: Create and manage your cryptocurrency portfolio with ease. Track your holdings, monitor their performance, and gain valuable insights into your investment strategies. Stay on top of your crypto assets and optimize your portfolio for maximum returns.</li><br></br>

                <li>News and Analysis: Stay updated with the latest news, trends, and developments in the cryptocurrency industry. Our platform provides curated news articles, expert analysis, and market insights to help you stay ahead of the game.</li><br></br>

                <li>Educational Resources: Expand your knowledge and understanding of cryptocurrencies with our educational resources. Access beginner-friendly guides, in-depth tutorials, and informative articles that cover various aspects of blockchain technology and digital assets.</li><br></br>

                <li>Community Engagement: Connect with a vibrant community of crypto enthusiasts, investors, and experts. Share your insights, exchange ideas, and learn from others' experiences through our interactive forums and discussion boards.</li><br></br>

                <li>Personalized Alerts: Set up personalized alerts for price movements, market trends, and news updates. Stay informed about the cryptocurrencies that matter most to you, ensuring you never miss an opportunity or important development.</li><br></br>
            </ul>
            </Box>
        </Box>
    )
}
