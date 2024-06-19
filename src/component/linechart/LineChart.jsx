import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (historicalData.prices) {
      let dataCopy = [['Date', 'Prices']];
      historicalData.prices.forEach(item => {
        // Ensure each inner array has two elements: date as string and price as number
        dataCopy.push([new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div>
      <Chart
        chartType='LineChart'
        data={data}
        options={{
          // Add options if needed
          // Example: title: 'Historical Prices'
        }}
    
      />
    </div>
  );
};

export default LineChart;
