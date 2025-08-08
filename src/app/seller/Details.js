'use client';

import React from 'react';

export default function Details({ order, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 relative">
      {/* Exit button (top-right corner) */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>ID:</strong> {order.id}</p>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
    </div>
  );
}
