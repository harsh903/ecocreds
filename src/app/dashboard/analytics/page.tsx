'use client';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TrendingUp, Leaf, Award, Zap } from 'lucide-react';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalyticsPage() {
  const stats = {
    totalCredits: 5000,
    monthlyGrowth: '+15%',
    carbonOffset: '2.5 tons',
    impactScore: 850
  };

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Carbon Credits',
        data: [450, 520, 580, 620, 700, 850],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Target',
        data: [400, 500, 600, 700, 800, 900],
        borderColor: 'rgba(234, 179, 8, 0.8)',
        borderDash: [5, 5],
        tension: 0.4,
      }
    ]
  };

  const impactData = {
    labels: ['Transport', 'Hotels', 'Activities', 'Recycling'],
    datasets: [
      {
        label: 'CO2 Reduction (kg)',
        data: [120, 80, 60, 40],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
        borderWidth: 0,
      }
    ]
  };

  const contributionData = {
    labels: ['Public Transport', 'EV Usage', 'Green Hotels', 'Recycling', 'Energy Saving'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(234, 179, 8, 0.8)',
        ],
        borderWidth: 0,
      }
    ]
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <select className="border rounded-lg px-3 py-2">
          <option>Last 6 Months</option>
          <option>Last Year</option>
          <option>All Time</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-medium">{stats.monthlyGrowth}</span>
          </div>
          <p className="text-gray-600">Total Credits</p>
          <p className="text-2xl font-bold">{stats.totalCredits}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <Leaf className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-gray-600">Carbon Offset</p>
          <p className="text-2xl font-bold">{stats.carbonOffset}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-gray-600">Impact Score</p>
          <p className="text-2xl font-bold">{stats.impactScore}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-6 h-6 text-yellow-600" />
          </div>
          <p className="text-gray-600">Energy Saved</p>
          <p className="text-2xl font-bold">1.2 MWh</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Progress</h2>
          <Line 
            data={monthlyData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom'
                }
              },
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Impact Distribution</h2>
          <Bar 
            data={impactData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
        </div>
      </div>

      {/* Contribution Breakdown */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Contribution Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-64">
            <Doughnut 
              data={contributionData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right'
                  }
                },
                cutout: '70%'
              }}
            />
          </div>
          <div className="space-y-4">
            {contributionData.labels.map((label, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: contributionData.datasets[0].backgroundColor[index] }}
                  ></div>
                  <span>{label}</span>
                </div>
                <span className="font-medium">{contributionData.datasets[0].data[index]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}