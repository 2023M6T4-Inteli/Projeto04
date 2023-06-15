import React from 'react';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

interface DonutChartProps {
  data: number[];
  labels: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels }) => {
  const chartRef = React.useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = React.useRef<Chart<"doughnut"> | null>(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        Chart.register(...registerables);

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart<"doughnut">(ctx, {
          type: 'doughnut',
          data: {
            datasets: [
              {
                data,
                backgroundColor: ['#FF2323', '#F5F5F5', '#00D02E'], // Cores personalizadas
              },
            ],
            labels,
          },
          options: {
            responsive: true,
            cutout: '70%',
            plugins: {
              legend: {
                position: 'right',
              },
            },
          },
        });
      }
    }
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default DonutChart;