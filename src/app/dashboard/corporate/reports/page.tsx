'use client';
import { useState } from 'react';
import { FileText, Download, Filter, Calendar, BarChart2, TrendingUp, TrendingDown } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('carbon');
  const [dateRange, setDateRange] = useState('2024');

  const reports = [
    {
      id: 'carbon',
      name: 'Carbon Footprint Analysis',
      description: 'Detailed breakdown of carbon emissions and offsets',
      metrics: [
        { label: 'Total Emissions', value: '1,250 tons CO2' },
        { label: 'Reduction Target', value: '25%' },
        { label: 'Current Progress', value: '18%' }
      ]
    },
    {
      id: 'sustainability',
      name: 'Sustainability Metrics',
      description: 'Key environmental impact indicators',
      metrics: [
        { label: 'Energy Usage', value: '850 MWh' },
        { label: 'Water Saved', value: '125,000 L' },
        { label: 'Waste Recycled', value: '85%' }
      ]
    },
    {
      id: 'employee',
      name: 'Employee Engagement',
      description: 'Staff participation in eco initiatives',
      metrics: [
        { label: 'Active Users', value: '1,200' },
        { label: 'Challenges Completed', value: '450' },
        { label: 'Average Score', value: '8.5/10' }
      ]
    }
  ];

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Year',
        data: [120, 115, 110, 105, 100, 95],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Previous Year',
        data: [130, 125, 120, 118, 115, 110],
        borderColor: 'rgb(156, 163, 175)',
        borderDash: [5, 5],
        tension: 0.4
      }
    ]
  };

  const categoryData = {
    labels: ['Transport', 'Energy', 'Manufacturing', 'Waste', 'Other'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(107, 114, 128, 0.8)'
        ]
      }
    ]
  };

  const downloadReport = (format: string) => {
    // Implementation for downloading reports
    console.log(`Downloading ${selectedReport} in ${format} format`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-600">Access and download detailed sustainability reports</p>
        </div>
        <div className="flex gap-4">
          <select 
            className="border rounded-lg px-4 py-2"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="all">All Time</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {reports.map((report) => (
          <div 
            key={report.id}
            className={`bg-white rounded-xl shadow p-6 cursor-pointer transition-all ${
              selectedReport === report.id ? 'ring-2 ring-green-500' : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedReport(report.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{report.name}</h3>
                <p className="text-sm text-gray-600">{report.description}</p>
              </div>
              <FileText className="text-green-600" />
            </div>
            <div className="space-y-3">
              {report.metrics.map((metric, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{metric.label}</span>
                  <span className="font-medium">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Report Detail Section */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Detailed Analysis</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => downloadReport('pdf')}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Download PDF
            </button>
            <button 
              onClick={() => downloadReport('excel')}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Download Excel
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-4">Trend Analysis</h3>
            <div className="h-64">
              <Line 
                data={trendData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: false
                    }
                  }
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Category Breakdown</h3>
            <div className="h-64">
              <Doughnut 
                data={categoryData}
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
        </div>

        {/* Detailed Metrics Table */}
        <div className="mt-8">
          <h3 className="font-medium mb-4">Monthly Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Month</th>
                  <th className="text-left py-3 px-4">Emissions</th>
                  <th className="text-left py-3 px-4">Target</th>
                  <th className="text-left py-3 px-4">Variance</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {['January', 'February', 'March'].map((month, index) => (
                  <tr key={month} className="border-b">
                    <td className="py-3 px-4">{month}</td>
                    <td className="py-3 px-4">120 tons</td>
                    <td className="py-3 px-4">115 tons</td>
                    <td className="py-3 px-4 text-red-500">+5 tons</td>
                    <td className="py-3 px-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Off Track
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingDown className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-medium text-green-800">Reduce Energy Consumption</h3>
            </div>
            <p className="text-sm text-green-600">
              Consider implementing motion sensors in office spaces to reduce lighting costs by up to 15%.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-medium text-blue-800">Optimize Transportation</h3>
            </div>
            <p className="text-sm text-blue-600">
              Switch 25% of delivery fleet to electric vehicles to reduce emissions by approximately 30 tons annually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}