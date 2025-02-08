'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Leaf, Home, QrCode, Hotel, 
  ShoppingCart, Award, Map, 
  User, LogOut, BarChart2 
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  const menuItems = [
    { title: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { title: 'Travel Hub', icon: <Map />, path: '/dashboard/travel' },
    { title: 'Hotels', icon: <Hotel />, path: '/dashboard/hotels' },
    { title: 'Challenges', icon: <Award />, path: '/dashboard/challenges' },
    { title: 'Rewards', icon: <ShoppingCart />, path: '/dashboard/Rewards' },
    { title: 'Analytics', icon: <BarChart2 />, path: '/dashboard/analytics' },
    { title: 'QR Scanner', icon: <QrCode />, path: '/dashboard/scanner' },
    { title: 'Profile', icon: <User />, path: '/dashboard/profile' }
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="flex items-center p-4 border-b">
        <Leaf className="h-8 w-8 text-green-600" />
        <span className="ml-2 text-xl font-bold">EcoCreds</span>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              pathname === item.path 
                ? 'bg-green-50 text-green-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="w-6 h-6">{item.icon}</span>
            <span className="ml-3">{item.title}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t">
        <button
          onClick={() => logout()}
          className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <LogOut className="w-6 h-6" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};