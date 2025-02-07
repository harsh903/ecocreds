'use client';
import { useState } from 'react';
import { QrScanner } from '../components/eco/QrScanner';
import { 
  Award, X, Camera, History, 
  Leaf, Car, Hotel, Recycle, 
  TrendingUp, Calendar, MapPin 
} from 'lucide-react';

export default function ScannerPage() {
  const [showScanner, setShowScanner] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const [points, setPoints] = useState(0);
  interface ScanHistoryItem {
    timestamp: string;
    points: number;
    type: string;
    location: string;
    impact: string;
    [key: string]: any;
  }

  const [scanHistory, setScanHistory] = useState<ScanHistoryItem[]>([]);
  const [totalPoints, setTotalPoints] = useState(1250);
  const [scanStreak, setScanStreak] = useState(5);

  const quickStats = [
    { icon: <Leaf />, label: 'Carbon Saved', value: '2.5 tons' },
    { icon: <TrendingUp />, label: 'Total Points', value: totalPoints },
    { icon: <Calendar />, label: 'Daily Streak', value: `${scanStreak} days` }
  ];

  const categories = [
    { icon: <Car />, type: 'transport', label: 'Transport QR' },
    { icon: <Hotel />, type: 'hotel', label: 'Hotel Check-in' },
    { icon: <Recycle />, type: 'recycling', label: 'Recycling Bin' },
    { icon: <MapPin />, type: 'location', label: 'Eco Location' }
  ];

  const handleScan = (result: string) => {
    try {
      const qrData = JSON.parse(result);
      if (qrData.type && qrData.value) {
        const earnedPoints = calculatePoints(qrData.type);
        setPoints(earnedPoints);
        setScanResult(result);
        setTotalPoints(prev => prev + earnedPoints);
        
        setScanHistory(prev => [{
          timestamp: new Date().toLocaleString(),
          points: earnedPoints,
          type: qrData.type,
          location: qrData.location || 'Unknown',
          impact: calculateImpact(qrData.type),
          ...qrData
        }, ...prev]);

        setShowScanner(false);
      }
    } catch (error) {
      alert('Invalid QR Code format');
    }
  };

  const calculatePoints = (type: 'transport' | 'hotel' | 'recycling' | 'location') => {
    const pointsMap: { [key in 'transport' | 'hotel' | 'recycling' | 'location']: number } = {
      'transport': Math.floor(Math.random() * 50) + 100,
      'hotel': Math.floor(Math.random() * 100) + 200,
      'recycling': Math.floor(Math.random() * 30) + 50,
      'location': Math.floor(Math.random() * 40) + 60
    };
    return pointsMap[type] || Math.floor(Math.random() * 50) + 50;
  };

  const calculateImpact = (type: 'transport' | 'hotel' | 'recycling' | 'location') => {
    const impactMap = {
      'transport': 'Reduced 2kg CO2',
      'hotel': 'Saved 5kWh energy',
      'recycling': 'Recycled 1kg waste',
      'location': 'Supported eco-business'
    };
    return impactMap[type] || 'Positive impact';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">QR Scanner</h1>
          <p className="text-gray-600">Scan QR codes to earn eco points</p>
        </div>
        <button
          onClick={() => setShowScanner(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center"
        >
          <Camera className="w-5 h-5 mr-2" />
          Start Scanning
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-600">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scan Categories */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Scan Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-green-50 p-4 rounded-lg text-center cursor-pointer hover:bg-green-100 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                {category.icon}
              </div>
              <p className="font-medium">{category.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {showScanner && (
          <div className="bg-white rounded-xl shadow p-6 relative">
            <button
              onClick={() => setShowScanner(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Scan QR Code</h2>
            <QrScanner
              onScan={handleScan}
              onClose={() => setShowScanner(false)}
            />
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600">
                Point camera at any eco-friendly QR code to earn points
              </p>
            </div>
          </div>
        )}

        {scanResult && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Scan Result</h2>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <Award className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-lg font-medium">Points Earned!</span>
              </div>
              <p className="text-3xl font-bold text-green-600">+{points} points</p>
              <p className="text-sm text-green-600 mt-2">
                {scanHistory[0]?.impact}
              </p>
            </div>
          </div>
        )}

        {/* Scan History */}
        <div className="bg-white rounded-xl shadow p-6 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <History className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <select className="border rounded-lg px-3 py-1">
              <option>All Time</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="space-y-4">
            {scanHistory.map((scan, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      {categories.find(cat => cat.type === scan.type)?.icon}
                    </div>
                    <div>
                      <p className="font-medium capitalize">{scan.type}</p>
                      <p className="text-sm text-gray-500">{scan.timestamp}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-green-600 font-bold">+{scan.points} points</span>
                  <p className="text-xs text-gray-500">{scan.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}