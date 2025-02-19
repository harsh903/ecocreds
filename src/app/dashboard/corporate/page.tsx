'use client';
import { useState } from 'react';
import { 
  BarChart2, Download, MessageCircle, FileText,
  Calendar, TrendingUp, Users, AlertCircle,
  Filter, Printer, Mail, HelpCircle, ArrowRight,
  Leaf, TreeDeciduous, Droplets, Recycle,
  Building, Settings, Trophy, Target
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function CorporateDashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  const stats = [
    {
      title: "Carbon Credits",
      value: "5,000",
      change: "+15%",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      color: "green"
    },
    {
      title: "Energy Saved",
      value: "2.5 MWh",
      change: "+8%",
      icon: <TreeDeciduous className="w-6 h-6 text-blue-600" />,
      color: "blue"
    },
    {
      title: "Water Conserved",
      value: "1,200 L",
      change: "+12%",
      icon: <Droplets className="w-6 h-6 text-cyan-600" />,
      color: "cyan"
    },
    {
      title: "Waste Recycled",
      value: "85%",
      change: "+5%",
      icon: <Recycle className="w-6 h-6 text-purple-600" />,
      color: "purple"
    }
  ];

  const quickLinks = [
    { title: "View Reports", desc: "Access detailed sustainability reports", icon: <FileText /> },
    { title: "Employee Data", desc: "Track engagement and activities", icon: <Users /> },
    { title: "ESG Metrics", desc: "Monitor environmental impact", icon: <BarChart2 /> },
    { title: "Settings", desc: "Configure dashboard preferences", icon: <Settings /> }
  ];

  const recentActivities = [
    {
      title: "Monthly Report Generated",
      desc: "Carbon Footprint Analysis - March 2024",
      time: "2h ago",
      icon: <FileText />,
      color: "text-blue-600"
    },
    {
      title: "Achievement Unlocked",
      desc: "Reduced energy consumption by 20%",
      time: "1d ago",
      icon: <Trophy />,
      color: "text-yellow-600"
    },
    {
      title: "New Challenge Started",
      desc: "Zero Waste Initiative",
      time: "2d ago",
      icon: <Target />,
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Building className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold">ABC Corporation</h1>
                <p className="text-sm text-gray-600">Corporate Sustainability Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium">AC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 bg-${stat.color}-50 rounded-lg`}>
                  {stat.icon}
                </div>
                <span className={`text-${stat.color}-600 text-sm font-medium`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600">{stat.title}</h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {quickLinks.map((link, index) => (
            <button 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {link.icon}
                </div>
                <h3 className="font-medium mb-1">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <button className="text-sm text-green-600 hover:text-green-700">View All</button>
            </div>
            <div className="space-y-6">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-2 bg-gray-50 rounded-lg ${activity.color} mr-4`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.desc}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Support */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6">Quick Support</h2>
            <div className="space-y-4">
              {['Email Support', 'Live Chat', 'Help Center'].map((item, index) => (
                <button 
                  key={index}
                  className="w-full flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    {index === 0 && <Mail className="w-5 h-5 text-green-600 mr-3" />}
                    {index === 1 && <MessageCircle className="w-5 h-5 text-green-600 mr-3" />}
                    {index === 2 && <HelpCircle className="w-5 h-5 text-green-600 mr-3" />}
                    <div className="text-left">
                      <p className="font-medium">{item}</p>
                      <p className="text-sm text-gray-600">Get help with your queries</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}