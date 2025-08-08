'use client';

import React from 'react';

export default function Store({ onItemClick }) {
  const stores = [
    { id: 1, name: 'Tech Hub', location: 'New York' },
    { id: 2, name: 'Gadget World', location: 'San Francisco' },
    { id: 3, name: 'Digital Market', location: 'Los Angeles' },
    { id: 4, name: 'Smart Zone', location: 'Chicago' },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {stores.map((store) => (
          <div
            key={store.id}
            onClick={() => onItemClick(store)}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          >
            <div className="w-24 h-24 bg-blue-200 rounded-full mb-3"></div>
            <h3 className="font-semibold text-gray-700">{store.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{store.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
