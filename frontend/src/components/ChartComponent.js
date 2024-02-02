// ChartComponent.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (data) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new Chart instance with legend on the side
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false, // Set to false to customize the size
          aspectRatio: 1, // Adjust this value to control the aspect ratio
          plugins: {
            legend: {
              display: true,
              position: 'right', // Change to 'left', 'top', or 'bottom' as needed
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} width={300} height={300} />;
};

export default ChartComponent;
