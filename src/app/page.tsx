'use client';
import { 
  Leaf, Globe, Trees, Recycle, Users, Zap, 
  Building, Car, Hotel, Calendar, Star,
  BarChart2, TrendingUp, ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: "B2B Solutions",
      description: "Comprehensive sustainability programs for corporates, transport, hospitality & events",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Carbon Credits",
      description: "Track and trade carbon credits through our platform",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics",
      description: "Monitor sustainability metrics and impact in real-time",
      icon: <BarChart2 className="w-6 h-6" />
    }
  ];

  const sectors = [
    { name: "Corporate", icon: <Building />, points: "API Integration, Employee Engagement" },
    { name: "Transport", icon: <Car />, points: "Fleet Management, Route Optimization" },
    { name: "Hospitality", icon: <Hotel />, points: "Green Stay, Waste Reduction" },
    { name: "Events", icon: <Calendar />, points: "Smart Digital Events, Waste Management" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="w-6 h-6 text-green-600 mr-2" />
              <span className="font-bold text-xl">EcoCreds</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
              <a href="#sectors" className="text-gray-600 hover:text-green-600">Sectors</a>
              <a href="#impact" className="text-gray-600 hover:text-green-600">Impact</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-green-600">Login</Link>
              <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-600 font-medium mb-6">
              🌱 India's Leading Sustainability Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart for Business,
              <span className="text-green-600"> Great for Planet</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join India's 3rd largest carbon trading marketplace. Transform your business operations 
              into sustainable practices while earning rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/api/placeholder/600/500" 
              alt="Sustainability Solutions"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600">Streamlined sustainability management for every sector</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Solutions</h2>
            <p className="text-xl text-gray-600">Tailored sustainability programs for every sector</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{sector.name}</h3>
                <p className="text-gray-600">{sector.points}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a measurable difference</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₹1.2B+</div>
              <div className="text-gray-600">Carbon Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-600">CO₂ Tons Offset</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make Business Sustainable?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Join India's leading companies in making sustainability profitable and impactful.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Footer with Contact */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="w-6 h-6 text-green-400 mr-2" />
              <span className="font-bold text-xl">EcoCreds</span>
            </div>
            <p className="text-gray-400">
              Smart for Business, Great for Planet
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Corporate Programs</li>
              <li>Transport Solutions</li>
              <li>Hospitality Services</li>
              <li>Event Management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@ecocreds.com</li>
              <li>+91 123 456 7890</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}