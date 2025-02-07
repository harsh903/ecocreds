'use client';
import { User, Settings, Bell, Shield, Award, Leaf, Zap, Car, Hotel, Recycle } from 'lucide-react';

export default function ProfilePage() {
  const userProfile = {
    name: 'Harsh Singh',
    email: 'harshpratapsingh@gmail.com',
    joinDate: 'Feb 2024',
    totalCredits: 5000,
    level: 'EcoChampion',
    achievements: [
      {
        title: 'Zero Emission Pioneer',
        icon: <Car className="w-4 h-4" />,
        category: 'Transport',
        date: '2024-02-01'
      },
      {
        title: 'Green Hotel Expert',
        icon: <Hotel className="w-4 h-4" />,
        category: 'Stays',
        date: '2024-01-15'
      },
      {
        title: 'Sustainable Traveler',
        icon: <Leaf className="w-4 h-4" />,
        category: 'Lifestyle',
        date: '2024-01-10'
      },
      {
        title: 'Energy Saver',
        icon: <Zap className="w-4 h-4" />,
        category: 'Impact',
        date: '2024-02-05'
      },
      {
        title: 'Recycling Champion',
        icon: <Recycle className="w-4 h-4" />,
        category: 'Impact',
        date: '2024-01-20'
      }
    ]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-green-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{userProfile.name}</h2>
              <p className="text-gray-600">{userProfile.email}</p>
              <p className="text-sm text-gray-500">Member since {userProfile.joinDate}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-600">Total Credits</h3>
              <p className="text-xl font-bold text-green-600">{userProfile.totalCredits}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                <h3 className="text-sm text-gray-600">Level</h3>
              </div>
              <p className="text-xl font-bold text-green-600">{userProfile.level}</p>
            </div>
          </div>

          <h3 className="font-semibold mb-3">Achievements</h3>
          <div className="space-y-3">
            {userProfile.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    {achievement.icon}
                  </div>
                  <div>
                    <span className="font-medium">{achievement.title}</span>
                    <p className="text-sm text-gray-500">{achievement.category}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(achievement.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-gray-500 mr-3" />
                  <span>Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-gray-500 mr-3" />
                  <span>Privacy Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}