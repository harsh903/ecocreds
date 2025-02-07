'use client';
import { Award, Star } from 'lucide-react';

interface SustainabilityScoreProps {
  tier: string;
  points: number;
}

export const SustainabilityScore = ({ tier, points }: SustainabilityScoreProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Sustainability Score</h2>
        <Award className="w-6 h-6 text-green-600" />
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="bg-green-50 p-4 rounded-full">
          <Star className="w-12 h-12 text-green-600" />
        </div>
        <div>
          <div className="text-2xl font-bold">{tier}</div>
          <div className="text-sm text-gray-600">{points} points</div>
        </div>
      </div>
    </div>
  );
};