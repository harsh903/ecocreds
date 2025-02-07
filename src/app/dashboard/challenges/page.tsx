'use client';
import { Star, Zap, Car, Hotel, Trees, Users, Globe } from 'lucide-react';

export default function ChallengesPage() {
  const stats = {
    totalRewards: 2500,
    completedChallenges: 15,
    currentStreak: 7,
    rank: 'Gold'
  };

  const challenges = [
    {
      title: 'Zero Emission Week',
      description: 'Complete 5 EV rides',
      progress: 3,
      target: 5,
      reward: '1000 coins',
      deadline: '3 days left',
      category: 'Transport',
      icon: <Car className="w-6 h-6" />,
      impact: '50kg CO2 saved',
      participants: 156
    },
    {
      title: 'Eco Warrior',
      description: 'Stay at 3 green hotels',
      progress: 1,
      target: 3,
      reward: '800 coins',
      deadline: '7 days left',
      category: 'Accommodation',
      icon: <Hotel className="w-6 h-6" />,
      impact: '100kWh energy saved',
      participants: 89
    },
    {
      title: 'Green Explorer',
      description: 'Visit 5 eco-friendly locations',
      progress: 4,
      target: 5,
      reward: '1200 coins',
      deadline: '5 days left',
      category: 'Adventure',
      icon: <Globe className="w-6 h-6" />,
      impact: 'Support local conservation',
      participants: 234
    }
  ];

  const categories = ['All', 'Transport', 'Accommodation', 'Adventure', 'Lifestyle'];

  return (
    <div className="p-6">
      {/* Header Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Active Challenges</h1>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-600">Rank: {stats.rank}</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-green-600 font-medium">{stats.totalRewards} coins</span>
          </div>
          <div className="bg-blue-100 px-4 py-2 rounded-lg">
            <span className="text-blue-600 font-medium">{stats.currentStreak} day streak</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-lg bg-white hover:bg-green-50 focus:ring-2 focus:ring-green-500 whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Challenges Grid */}
      <div className="grid gap-6">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{challenge.title}</h3>
                    <span className="text-sm text-gray-500">{challenge.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">{challenge.deadline}</span>
                  <div className="flex items-center mt-1">
                    <Users className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{challenge.participants}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{challenge.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{challenge.progress}/{challenge.target} completed</span>
                  <span className="text-green-600">{challenge.reward}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                  <span>{challenge.impact}</span>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Join Challenge
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}