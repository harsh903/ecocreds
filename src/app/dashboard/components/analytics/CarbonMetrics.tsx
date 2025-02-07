'use client';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Leaf, TrendingUp } from 'lucide-react';

interface CarbonMetricsProps {
  total: number;
  monthly: number;
}

export const CarbonMetrics = ({ total, monthly }: CarbonMetricsProps) => {
  const percentage = (monthly / 300) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Carbon Credits</h2>
        <Leaf className="w-6 h-6 text-green-600" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="w-24 h-24 mx-auto">
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              styles={buildStyles({
                pathColor: '#22c55e',
                textColor: '#22c55e',
                trailColor: '#dcfce7'
              })}
            />
          </div>
          <p className="text-center mt-2 text-sm text-gray-600">Monthly Progress</p>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <div className="text-2xl font-bold text-gray-900">{total}</div>
            <div className="text-sm text-gray-600">Total Credits</div>
          </div>
          <div className="flex items-center text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+{monthly} this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};