'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Dashboard from './Dashboard';
import Order from './Order';
import Product from './Product';
import Profile from './Profile';
import Transaction from './Transaction';
import Messages from './Messages'; // ⬅️ Make sure this file exists

export default function Page() {
  const [activePage, setActivePage] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) setActivePage(savedPage);
  }, []);

  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Order />;
      case 'products':
        return <Product />;
      case 'transaction':
        return <Transaction />;
      case 'messages':
        return <Messages />;
      default:
        return <div className="text-blue-800 text-xl">🔍 Not Found</div>;
    }
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('activePage');
    router.push('/login');
  };

  return (
    <div className="w-screen h-screen bg-gray-50 text-gray-900 flex overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 top-0 left-0 h-full w-[240px] bg-white border-r border-gray-200 p-6 flex flex-col justify-between transition-transform duration-300 shadow-sm
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-8 tracking-tight">Seller Panel</h1>
          <nav className="space-y-3">
            {[
              { label: '👤 Profile', key: 'profile' },
              { label: '📦 Orders', key: 'orders' },
              { label: '🛠️ Product', key: 'products' },
              { label: '💰 Transactions', key: 'transaction' },
              { label: '📨 Messages', key: 'messages' }, // 🆕 Added here
              { label: '🏠 Dashboard', key: 'dashboard' },
            ].map(({ label, key }) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                  activePage === key
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="w-full text-left text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors duration-200 text-sm font-medium"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[70px] bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-2xl text-gray-600"
          >
            ☰
          </button>
          <h2 className="text-xl font-semibold capitalize text-gray-800">{activePage}</h2>
          <span className="text-sm text-gray-500 hidden md:block">Admin • Seller</span>
        </header>

        {/* Page Content */}
        <section className="flex-1 bg-gray-100 overflow-y-auto p-4">
          {renderPage()}
        </section>
      </main>
    </div>
  );
}
