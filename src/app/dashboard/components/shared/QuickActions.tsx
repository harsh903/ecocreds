'use client';
import { QrCode, Hotel, Map } from 'lucide-react';

interface QuickAction {
  title: string;
  icon: string;
  action: () => void;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export const QuickActions = ({ actions }: QuickActionsProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'qr-code':
        return <QrCode className="w-6 h-6" />;
      case 'hotel':
        return <Hotel className="w-6 h-6" />;
      case 'map':
        return <Map className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="text-green-600 mb-2">{getIcon(action.icon)}</div>
            <span className="text-sm text-center">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};