'use client';

import React from 'react';

export default function Customers() {
  return (
    <div className="w-full h-full flex flex-col items-center mt-8">
      {/* Customers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {[1, 2, 3, 4].map((customer) => (
          <div
            key={customer}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
          >
            {/* Customer Avatar */}
            <div className="w-16 h-16 bg-green-300 rounded-full mb-3"></div>
            
            {/* Customer Info */}
            <h3 className="font-medium text-gray-700 text-sm">Customer {customer}</h3>
            <p className="text-gray-500 text-xs mt-1">customer{customer}@mail.com</p>
            
            {/* Actions */}
            <div className="flex gap-2 mt-3">
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                View
              </button>
              <button className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
