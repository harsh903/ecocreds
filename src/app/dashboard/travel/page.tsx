'use client';
import { useState } from 'react';
import { 
  Car, Train, Bus, Calendar, MapPin, 
  Clock, Leaf, Coins, TrendingDown, 
  Navigation, BarChart2, ChevronRight 
} from 'lucide-react';

export default function TravelPage() {
  const [selectedMode, setSelectedMode] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const popularRoutes = [
    { from: 'Mumbai', to: 'Pune', savings: '2.5kg CO2' },
    { from: 'Delhi', to: 'Jaipur', savings: '3.1kg CO2' },
    { from: 'Bangalore', to: 'Mysore', savings: '1.8kg CO2' }
  ];

  const transportModes = [
    {
      id: 'ev',
      name: 'Electric Vehicle',
      icon: <Car />,
      emission: 0.5,
      points: 100,
      time: '2h 30m',
      cost: '₹800'
    },
    {
      id: 'train',
      name: 'Train',
      icon: <Train />,
      emission: 0.3,
      points: 150,
      time: '3h',
      cost: '₹400'
    },
    {
      id: 'bus',
      name: 'Electric Bus',
      icon: <Bus />,
      emission: 0.4,
      points: 120,
      time: '3h 30m',
      cost: '₹300'
    }
  ];

  const handleSearch = () => {
    // Simulate search - would connect to routing API
    setSelectedMode('train'); // Default to most eco-friendly option
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Sustainable Travel Planner</h1>
          <p className="text-gray-600">Find eco-friendly routes and earn rewards</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-green-600 font-medium">500 points available</span>
          </div>
        </div>
      </div>

      {/* Main Search Box */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="Enter source"
                className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">To</label>
            <div className="relative">
              <Navigation className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Find Routes
            </button>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Popular Eco Routes</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-green-50 px-4 py-2 rounded-lg flex items-center space-x-2 whitespace-nowrap">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>{route.from} → {route.to}</span>
                <span className="text-green-600 text-sm">Save {route.savings}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Route Options */}
      {selectedMode && (
        <div className="grid md:grid-cols-3 gap-6">
          {transportModes.map((mode) => (
            <div 
              key={mode.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                selectedMode === mode.id ? 'ring-2 ring-green-500 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedMode(mode.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  {mode.icon}
                </div>
                <span className="text-xl font-bold">{mode.cost}</span>
              </div>
              
              <h3 className="font-semibold mb-4">{mode.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{mode.time}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Leaf className="w-4 h-4 mr-2 text-green-600" />
                  <span>{mode.emission} kg CO2 saved</span>
                </div>
                <div className="flex items-center text-sm">
                  <Coins className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>+{mode.points} points</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center">
                Select <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Impact Stats */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Your Travel Impact</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div className="font-bold">25.5 kg</div>
            <div className="text-sm text-gray-600">CO2 Saved</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <BarChart2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="font-bold">15</div>
            <div className="text-sm text-gray-600">Eco Trips</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingDown className="w-6 h-6 text-purple-600" />
            </div>
            <div className="font-bold">45%</div>
            <div className="text-sm text-gray-600">Carbon Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
}