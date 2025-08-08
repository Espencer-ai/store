'use client';

import React from 'react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Sales',
      value: '₱145,000',
      change: '+12%',
      bg: 'bg-green-100',
      text: 'text-green-700',
    },
    {
      title: 'Orders',
      value: '340',
      change: '+8%',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
    },
    {
      title: 'Products',
      value: '58',
      change: '0%',
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
    },
    {
      title: 'Returns',
      value: '4',
      change: '-1%',
      bg: 'bg-red-100',
      text: 'text-red-700',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">📊 Seller Dashboard Overview</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 shadow-sm ${stat.bg} ${stat.text}`}
          >
            <h3 className="text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Placeholder for future charts or tables */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-gray-600 text-center">
        <p>📈 Sales trends, product charts, or order tables can be displayed here.</p>
      </div>
    </div>
  );
}
