'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Leaf, Mail, Lock, ArrowRight, Building, User, BarChart2 } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('individual'); // 'individual' or 'corporate'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      router.push(loginType === 'corporate' ? '/dashboard/corporate' : '/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-md w-full m-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Login to your EcoCredits account</p>
          </div>

          {/* Login Type Selector */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setLoginType('individual')}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors ${
                loginType === 'individual' 
                  ? 'bg-white shadow-sm text-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Individual
            </button>
            <button
              onClick={() => setLoginType('corporate')}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors ${
                loginType === 'corporate' 
                  ? 'bg-white shadow-sm text-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Building className="w-4 h-4 mr-2" />
              Corporate
            </button>
          </div>

          {loginType === 'corporate' && (
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-center mb-2">
                <BarChart2 className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-medium">Corporate Partner Benefits</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 ml-7">
                <li>• Real-time sustainability metrics dashboard</li>
                <li>• Employee engagement analytics</li>
                <li>• Carbon credit trading platform</li>
                <li>• ESG reporting tools</li>
              </ul>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  {loginType === 'corporate' ? 'Corporate Email' : 'Email'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder={loginType === 'corporate' ? 'Enter your corporate email' : 'Enter your email'}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-green-600 hover:text-green-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {loginType === 'corporate' ? 'Access Dashboard' : 'Sign in'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {loginType === 'individual' ? (
            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Sign up
              </Link>
            </p>
          ) : (
            <p className="mt-8 text-center text-sm text-gray-600">
              Need a corporate account?{' '}
              <Link
                href="/contact"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Contact Sales
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}