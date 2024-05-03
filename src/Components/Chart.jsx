import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [data, setData] = useState({
    labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    datasets: [
      {
        label: 'Total Tasks',
        data: [8, 3, 5, 4, 6, 2, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 5,
        pointHoverRadius: 6,
        pointHitRadius: 30,
      },
      // Add more datasets as needed
    ],
  });

  // Simulate data fetching from an API (replace with your actual data fetching logic)
  useEffect(() => {
    const fetchData = async () => {
      // ... fetch data from API
      setData({
        // Update data with fetched data
      });
    };

    fetchData();
  }, []);

  return (
    <Line
      data={data}
      options={{
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};

export default Chart;