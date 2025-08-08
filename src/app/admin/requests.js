'use client';

import React from 'react';

export default function Requests({ onItemClick }) {
  return (
    <div className="w-full h-full flex flex-col items-center mt-8">
      {/* Request Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {[1, 2, 3].map((req) => (
          <div
            key={req}
            onClick={() =>
              onItemClick({
                id: req,
                name: `Request ${req}`,
                status: 'Pending approval',
              })
            } // ✅ Click handler to show details
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          >
            <div className="w-20 h-20 bg-yellow-200 rounded-full mb-3"></div>
            <h3 className="font-semibold text-gray-700">Request {req}</h3>
            <p className="text-gray-500 text-sm mt-1">Pending approval</p>
            <div className="flex gap-2 mt-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Approve
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
