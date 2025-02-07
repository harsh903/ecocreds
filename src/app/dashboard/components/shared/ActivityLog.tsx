// src/app/dashboard/components/shared/ActivityLog.tsx
'use client';
import { User } from 'lucide-react'; // Added this import

interface Activity {
  user: string;
  action: string;
  timestamp?: string;
}

export const ActivityLog = ({ activities }: { activities: Activity[] }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Activity Log</h2>
        <button className="text-green-600 hover:text-green-700">View All</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <span className="font-medium">{activity.user}</span>
                <span className="text-gray-600 text-sm block">{activity.action}</span>
              </div>
            </div>
            {activity.timestamp && (
              <span className="text-sm text-gray-500">{activity.timestamp}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};