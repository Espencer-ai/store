'use client';

import React, { useState } from 'react';

export default function Order() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const orders = [
    { id: '#ORD-001', customer: 'John Doe', status: 'Pending', amount: '₱1,200', date: '2025-07-20' },
    { id: '#ORD-002', customer: 'Jane Smith', status: 'Shipped', amount: '₱850', date: '2025-07-18' },
    { id: '#ORD-003', customer: 'Carlos Rivera', status: 'Delivered', amount: '₱2,500', date: '2025-07-16' },
    { id: '#ORD-004', customer: 'Mika Tan', status: 'Cancelled', amount: '₱560', date: '2025-07-15' },
  ];

  const statusColors = {
    Pending: 'text-yellow-600 bg-yellow-100',
    Shipped: 'text-blue-600 bg-blue-100',
    Delivered: 'text-green-600 bg-green-100',
    Cancelled: 'text-red-600 bg-red-100',
  };

  // Filter orders by search
  const filteredOrders = orders
    .filter((order) =>
      `${order.id} ${order.customer} ${order.status}`.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">📦 Order Management</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Order ID, Customer or Status"
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-44 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="newest">🕒 Newest First</option>
          <option value="oldest">📅 Oldest First</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Order ID</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Customer</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No matching orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
