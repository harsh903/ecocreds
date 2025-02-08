'use client';
import { ShoppingBag, Tag, Zap, Car, Trees, Coffee, Ticket } from 'lucide-react';

export default function RewardsPage() {
  const products = [
    {
      name: 'Bamboo Water Bottle',
      price: '500 coins',
      description: 'Eco-friendly reusable bottle with insulation',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Lifestyle',
      stock: 15
    },
    {
      name: 'Eco-Hotel Stay',
      price: '5000 coins',
      description: 'One night at certified green hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Experiences',
      stock: 5
    },
    {
      name: 'Plant a Tree',
      price: '300 coins',
      description: 'Plant a tree in your name with certificate',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80',
      category: 'Impact',
      stock: 1000
    },
    {
      name: 'Eco Restaurant Voucher',
      price: '1200 coins',
      description: '₹1000 voucher for farm-to-table restaurants',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      category: 'Food',
      stock: 30
    },
    {
      name: 'Sustainable Fashion Coupon',
      price: '2000 coins',
      description: '30% off at eco-friendly fashion stores',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Lifestyle',
      stock: 25
    },
  ];

  const categories = ['All', 'Lifestyle', 'Transport', 'Food', 'Experiences', 'Impact'];

  // Filter out products without image URLs
  const filteredProducts = products.filter(product => product.image);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Rewards</h1>
          <p className="text-gray-600">Redeem your eco-points for sustainable rewards</p>
        </div>
        <div className="bg-green-100 px-4 py-2 rounded-lg">
          <span className="text-green-600 font-medium">Your Balance: 5,000 coins</span>
        </div>
      </div>

      <div className="flex gap-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-lg bg-white hover:bg-green-50 focus:ring-2 focus:ring-green-500 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                {product.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-green-600">{product.price}</span>
                  <p className="text-xs text-gray-500">{product.stock} available</p>
                </div>
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Redeem
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}