'use client';

import React, { useState, useEffect } from 'react';
import Store from './store';
import Requests from './requests';
import Sellers from './sellers';
import Customers from './customers';

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('store');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) setActivePage(savedPage);
  }, []);

  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  const navItems = [
    { key: 'store', label: 'Store' },
    { key: 'request', label: 'Request' },
    { key: 'seller', label: 'Sellers' },
    { key: 'customers', label: 'Customers' },
  ];

  const handleLogout = () => {
    localStorage.clear(); // Clear saved state like activePage
    window.location.href = '/'; // Redirect to login or homepage
  };

  return (
    <div className="w-full h-screen bg-orange-500 p-2">
      <div className="w-full h-full flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
        
        {/* Sidebar */}
        <div
          className={`fixed md:static top-0 left-0 h-full md:h-auto z-20 w-2/3 md:w-1/5 bg-blue-600 text-white p-4 transition-transform duration-300 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        >
          <h2 className="text-lg font-bold mb-6">Side Panel</h2>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActivePage(item.key);
                  setSelectedItem(null);
                  setSidebarOpen(false);
                }}
                className={`px-4 py-2 rounded text-left transition-colors duration-200 ${
                  activePage === item.key
                    ? 'bg-white text-blue-600 font-semibold'
                    : 'hover:bg-blue-500'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* ✅ Logout Button in Sidebar */}
            <button
              onClick={handleLogout}
              className="mt-10 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </nav>

          <button
            className="mt-6 bg-white text-blue-600 px-3 py-1 rounded md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            Close
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-16 bg-green-500 text-white flex items-center justify-between px-4 relative z-10">
            <button
              className="md:hidden text-2xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <h2 className="text-lg font-bold capitalize">{activePage}</h2>

            {/* ✅ Logout Button in Header (desktop only) */}
            <button
              onClick={handleLogout}
              className="hidden md:inline-block bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          {/* Body: Left (Main) and Right (Details) */}
          <div className="flex-1 bg-gray-200 p-4 overflow-auto flex gap-4">
            {/* LEFT: Main Section */}
            <div className="flex-[3] bg-white rounded-lg shadow p-4 overflow-auto">
              {activePage === 'store' && <Store onItemClick={setSelectedItem} />}
              {activePage === 'request' && <Requests onItemClick={setSelectedItem} />}
              {activePage === 'seller' && <Sellers />}
              {activePage === 'customers' && <Customers />}
            </div>

            {/* RIGHT: Details Panel (Slide-in) */}
            {selectedItem && (
              <div className="flex-[1] bg-gray-100 rounded-lg shadow p-4 animate-slide-in">
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <p className="text-gray-700 font-medium">{selectedItem.name}</p>
                {selectedItem.price && <p className="text-gray-500">Price: ${selectedItem.price}</p>}
                {selectedItem.status && <p className="text-gray-500">Status: {selectedItem.status}</p>}
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="h-12 bg-red-500 text-white flex items-center justify-center">
            <p className="text-sm">Footer</p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
