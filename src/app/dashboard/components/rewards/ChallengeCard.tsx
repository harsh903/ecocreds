'use client';
import { Trophy } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  progress: number;
  target: number;
  reward: number;
  type: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
  onComplete: () => void;
}

export const ChallengeCard = ({ challenge, onComplete }: ChallengeCardProps) => {
  const progress = (challenge.progress / challenge.target) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Active Challenge</h2>
        <Trophy className="w-6 h-6 text-green-600" />
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">{challenge.title}</h3>
        <div className="text-sm text-gray-600">
          Progress: {challenge.progress}/{challenge.target} {challenge.type}
        </div>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600 transition-all duration-500"
          />
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Reward: {challenge.reward} coins
      </div>
    </div>
  );
};