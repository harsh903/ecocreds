'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface EmissionsChartProps {
  current: number;
  previous: number;
  target: number;
}

export const EmissionsChart = ({ current, previous, target }: EmissionsChartProps) => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Current Month',
        data: [current * 0.25, current * 0.5, current * 0.75, current],
        borderColor: '#22c55e',
        tension: 0.4
      },
      {
        label: 'Previous Month',
        data: [previous * 0.25, previous * 0.5, previous * 0.75, previous],
        borderColor: '#94a3b8',
        tension: 0.4
      },
      {
        label: 'Target',
        data: [target * 0.25, target * 0.5, target * 0.75, target],
        borderColor: '#f59e0b',
        borderDash: [5, 5],
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: 'Monthly Carbon Reduction Progress'
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <Line data={data} options={options} />
    </div>
  );
};