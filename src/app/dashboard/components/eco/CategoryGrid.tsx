// src/app/dashboard/components/eco/CategoryGrid.tsx
'use client';
import { Leaf, Globe, Trees, Recycle, Users, Mountain } from 'lucide-react';

export const CategoryGrid = () => {
  const categories = [
    { icon: <Leaf className="w-6 h-6" />, label: 'Eco-friendly' },
    { icon: <Globe className="w-6 h-6" />, label: 'Sustainable' },
    { icon: <Recycle className="w-6 h-6" />, label: 'Carbon-neutral' },
    { icon: <Users className="w-6 h-6" />, label: 'Outdoor' },
    { icon: <Mountain className="w-6 h-6" />, label: 'Farm-to-table' },
    { icon: <Trees className="w-6 h-6" />, label: 'Green' }
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-green-100 transition-colors"
          >
            <div className="text-green-600 mb-2">{category.icon}</div>
            <span className="text-sm text-center">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};