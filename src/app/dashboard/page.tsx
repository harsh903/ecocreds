// src/app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { QrScanner } from './components/eco/QrScanner';
import { CarbonMetrics } from './components/analytics/CarbonMetrics';
import { EmissionsChart } from './components/analytics/EmissionsChart';
import { ChallengeCard } from './components/rewards/ChallengeCard';
import { SustainabilityScore } from './components/eco/SustainabilityScore';
import { QuickActions } from './components/shared/QuickActions';
import { RewardProgress } from './components/rewards/RewardProgress';

const Dashboard = () => {
  const [activeChallenge, setActiveChallenge] = useState({
    id: 1,
    title: 'Zero Emission Week',
    progress: 3,
    target: 5,
    reward: 1000,
    type: 'EV rides'
  });

  const userMetrics = {
    carbonCredits: 5000,
    monthlyReduction: 200,
    rewardCoins: 5000,
    sustainabilityTier: 'EcoChampion',
    monthlyStats: {
      saved: 200,
      target: 300,
      previousMonth: 180
    }
  };

  const quickActions = [
    { title: 'Scan QR', icon: 'qr-code', action: () => {} },
    { title: 'Book Eco-Hotel', icon: 'hotel', action: () => {} },
    { title: 'Plan Trip', icon: 'map', action: () => {} }
  ];

  return (
    <div className="p-6">
      {/* Top Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CarbonMetrics
          total={userMetrics.carbonCredits}
          monthly={userMetrics.monthlyReduction}
        />
        <SustainabilityScore
          tier={userMetrics.sustainabilityTier}
          points={userMetrics.rewardCoins}
        />
        <RewardProgress
          current={userMetrics.monthlyStats.saved}
          target={userMetrics.monthlyStats.target}
        />
      </div>

      {/* Performance Chart */}
      <div className="mb-8">
        <EmissionsChart
          current={userMetrics.monthlyStats.saved}
          previous={userMetrics.monthlyStats.previousMonth}
          target={userMetrics.monthlyStats.target}
        />
      </div>

      {/* Quick Actions & Active Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickActions actions={quickActions} />
        <ChallengeCard
          challenge={activeChallenge}
          onComplete={() => {}}
        />
      </div>
    </div>
  );
};

export default Dashboard;