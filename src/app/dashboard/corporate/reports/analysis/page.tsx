// src/app/dashboard/corporate/reports/analysis/page.tsx
// src/app/dashboard/corporate/reports/analysis/page.tsx
'use client';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { 
  Download, Filter, Calendar, BarChart2, 
  TrendingUp, TrendingDown, AlertCircle 
} from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


export default function ReportAnalysis() {
  const [timeframe, setTimeframe] = useState('monthly');
  const [reportType, setReportType] = useState('emissions');

  const analysisData = {
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Carbon Emissions (tons)',
          data: [120, 110, 100, 95, 85, 80],
          borderColor: 'rgb(34, 197, 94)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Target',
          data: [120, 115, 110, 105, 100, 95],
          borderColor: 'rgb(234, 179, 8)',
          borderDash: [5, 5],
          tension: 0.4,
          fill: false
        }
      ]
    }
  };

  const breakdownData = {
    labels: ['Transport', 'Energy', 'Waste', 'Water', 'Other'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(234, 179, 8, 0.8)',
        'rgba(147, 51, 234, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ]
    }]
  };

  const insights = [
    {
      title: "Carbon Reduction",
      value: "-15%",
      description: "Month-over-month reduction in emissions",
      trend: "down",
      color: "green"
    },
    {
      title: "Energy Efficiency",
      value: "+8%",
      description: "Improvement in energy usage",
      trend: "up",
      color: "blue"
    },
    {
      title: "Cost Savings",
      value: "₹125,000",
      description: "Monthly savings from green initiatives",
      trend: "up",
      color: "purple"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Analysis & Insights</h1>
          <p className="text-gray-600">Detailed breakdown of sustainability metrics</p>
        </div>
        <div className="flex gap-4">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600">{insight.title}</p>
                <h3 className="text-2xl font-bold mt-1">{insight.value}</h3>
              </div>
              <div className={`bg-${insight.color}-100 p-2 rounded-lg`}>
                {insight.trend === 'up' ? <TrendingUp className={`text-${insight.color}-600`} /> : <TrendingDown className={`text-${insight.color}-600`} />}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">{insight.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Emissions Trend</h2>
          <div className="h-80">
            <Line 
              data={analysisData.monthly}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Impact Breakdown</h2>
          <div className="h-80">
            <Doughnut 
              data={breakdownData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right'
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Detailed Metrics</h2>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="emissions">Emissions</option>
            <option value="energy">Energy</option>
            <option value="water">Water</option>
            <option value="waste">Waste</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Metric</th>
                <th className="text-left py-3 px-4">Current</th>
                <th className="text-left py-3 px-4">Previous</th>
                <th className="text-left py-3 px-4">Change</th>
                <th className="text-left py-3 px-4">Target</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Total Emissions</td>
                <td className="py-3 px-4">80 tons</td>
                <td className="py-3 px-4">95 tons</td>
                <td className="py-3 px-4 text-green-600">-15.8%</td>
                <td className="py-3 px-4">75 tons</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
                    On Track
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Recommended Actions</h2>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-yellow-800">Energy Usage Alert</h3>
              <p className="text-sm text-yellow-600">Building B shows 15% higher energy consumption. Consider energy audit.</p>
            </div>
          </div>
          {/* Add more action items */}
        </div>
      </div>
    </div>
  );
}