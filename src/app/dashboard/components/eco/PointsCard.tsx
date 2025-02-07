'use client';
interface PointsCardProps {
  points: number;
  todayPoints: number;
}

export const PointsCard = ({ points, todayPoints }: PointsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">Carbon Credits Earned</h2>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <span className="text-3xl font-bold text-green-600">{points}</span>
          <span className="text-gray-600 ml-2">points</span>
        </div>
        <span className="text-green-600">+{todayPoints} today</span>
      </div>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
        Redeem Points
      </button>
    </div>
  );
};
