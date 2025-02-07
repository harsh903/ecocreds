'use client';
import { Coins } from 'lucide-react';

interface RewardProgressProps {
  current: number;
  target: number;
}

export const RewardProgress = ({ current, target }: RewardProgressProps) => {
  const progress = (current / target) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Monthly Progress</h2>
        <Coins className="w-6 h-6 text-green-600" />
      </div>
      <div className="mb-4">
        <div className="text-2xl font-bold">{current}kg CO2</div>
        <div className="text-sm text-gray-600">Target: {target}kg CO2</div>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
          />
        </div>
      </div>
    </div>
  );
};
