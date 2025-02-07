'use client';
import { Star, Leaf, Award } from 'lucide-react';

export default function HotelsPage() {
  const hotels = [
    {
      name: 'ITC Windsor',
      chain: 'ITC Hotels',
      location: 'Bangalore, India',
      rating: 4.9,
      price: '₹12,000/night',
      ecoFeatures: [
        'LEED Platinum Certified',
        'Zero Carbon Emission',
        'Renewable Energy',
        'Farm to Table'
      ],
      certifications: ['First Zero Carbon Hotel in World'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Taj Exotica',
      chain: 'IHCL (Taj)',
      location: 'Goa, India',
      rating: 4.8,
      price: '₹25,000/night',
      ecoFeatures: [
        'Solar Power',
        'Water Conservation',
        'Plastic-Free',
        'Local Community Support'
      ],
      certifications: ['EarthCheck Certified'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'The Oberoi Udaivilas',
      chain: 'Oberoi Hotels',
      location: 'Udaipur, India',
      rating: 4.9,
      price: '₹45,000/night',
      ecoFeatures: [
        'Rainwater Harvesting',
        'Organic Gardens',
        'Electric Vehicles',
        'Waste Management'
      ],
      certifications: ['Green Globe Certified'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'The Leela Palace',
      chain: 'The Leela',
      location: 'New Delhi, India',
      rating: 4.8,
      price: '₹32,000/night',
      ecoFeatures: [
        'Energy Management',
        'Green Initiatives',
        'Sustainable Practices',
        'Local Sourcing'
      ],
      certifications: ['ISO 14001 Certified'],
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Eco-Friendly Hotels</h1>
        <div className="flex gap-2">
          <select className="border rounded-lg px-3 py-2">
            <option>All Locations</option>
            <option>Bangalore</option>
            <option>Goa</option>
            <option>Udaipur</option>
            <option>New Delhi</option>
          </select>
          <select className="border rounded-lg px-3 py-2">
            <option>All Chains</option>
            <option>ITC Hotels</option>
            <option>Taj Hotels</option>
            <option>Oberoi Hotels</option>
            <option>The Leela</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              {hotel.certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center"
                >
                  <Award className="w-3 h-3 mr-1" />
                  {cert}
                </div>
              ))}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.chain}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="ml-1">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{hotel.location}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.ecoFeatures.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center"
                  >
                    <Leaf className="w-3 h-3 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">{hotel.price}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}