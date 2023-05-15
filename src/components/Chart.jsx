import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);
export default function Chart({arr=[],currency,days}) {

    const price = [];
    const date = [];

    for(let i=0; i<arr.length; i++){
        if(days === '24H') 
            date.push(new Date(arr[i][0]).toLocaleTimeString());

        else 
            date.push(new Date(arr[i][0]).toLocaleDateString());
        price.push(arr[i][1]);
    }

    const data = {
        labels: date,
        datasets: [{
            label: `Price in ${currency}`,
            data: price,
            borderColor: "rgb(20, 88, 224)",
            backgroundColor: "rgba(20, 88, 224,0.2)",
            tension: 0.1
        }]
    }
  return (
    <>  
        <Line options={{
            responsive : true
        }} data={data} />
    </>
  )
}
