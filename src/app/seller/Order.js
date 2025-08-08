'use client';

import React, { useState } from 'react';
import Table from './Table';
import Details from './Details';

export default function Order() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const allOrders = [
    { id: 1, name: 'Order #001', status: 'Pending' },
    { id: 2, name: 'Order #002', status: 'Delivered' },
    { id: 3, name: 'Order #003', status: 'Pending' },
    { id: 4, name: 'Order #004', status: 'Delivered' },
  ];

  const filteredOrders =
    statusFilter === 'All'
      ? allOrders
      : allOrders.filter((order) => order.status === statusFilter);

  return (
    <div className="w-full min-h-full flex flex-col bg-white">
      {/* Filter Buttons */}
      <div className="w-full px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex gap-4">
          {['All', 'Pending', 'Delivered'].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setSelectedOrder(null); // Clear selected order when filter changes
              }}
              className={`min-w-[120px] px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition
                ${statusFilter === status ? 'ring-2 ring-offset-2 ring-blue-300' : ''}`}
            >
              {status === 'All' ? 'All Orders' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 px-6 py-6 overflow-y-auto bg-blue-50 gap-6">
        {/* Table */}
        <div className={`flex-1 ${!selectedOrder ? 'w-full' : ''}`}>
          <Table
            columns={['ID', 'Name', 'Status', 'Info']}
            data={filteredOrders}
            onDetailsClick={setSelectedOrder}
          />
        </div>

        {/* Details Section */}
        {selectedOrder && (
          <div className="w-[350px]">
            <Details order={selectedOrder} onClose={() => setSelectedOrder(null)} />
          </div>
        )}
      </div>
    </div>
  );
}
