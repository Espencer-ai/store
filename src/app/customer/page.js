'use client';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Basket from './Basket';
import History from './History';
import Profile from './Profile';
import Product from './product';
import Stores from './Stores';
import Store from './Store';

export default function CustomerPage() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null); // ✅ Track selected store

  // Initialize state from history
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab') || 'Home';
    setActiveTab(savedTab);
    window.history.replaceState({ tab: savedTab }, '');
  }, []);

  useEffect(() => {
    if (activeTab) localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = (e) => {
      const state = e.state;
      if (state?.product) {
        setSelectedProduct(state.product);
      } else if (state?.store) {
        setSelectedStore(state.store);
      } else if (state?.tab) {
        setSelectedProduct(null);
        setSelectedStore(null);
        setActiveTab(state.tab);
      } else {
        setSelectedProduct(null);
        setSelectedStore(null);
        setActiveTab('Home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleTabChange = (tab) => {
    setSelectedProduct(null);
    setSelectedStore(null); // ✅ Reset store view
    setActiveTab(tab);
    window.history.pushState({ tab }, '', '');
  };

  const handleProductOpen = (product) => {
    setSelectedProduct(product);
    window.history.pushState({ product }, '', '');
  };

  const handleProductClose = () => {
    setSelectedProduct(null);
    window.history.back();
  };

  const handleStoreOpen = (store) => {
    setSelectedStore(store); // ✅ Open store in same place
    window.history.pushState({ store }, '', '');
  };

  const handleStoreClose = () => {
    setSelectedStore(null); // ✅ Go back to Stores.js
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            <div className="flex-1 overflow-y-auto pr-2">
              <Home onBoxClick={handleProductOpen} />
            </div>
            {selectedProduct && (
              <div className="w-full lg:w-[400px] bg-white shadow-md rounded-lg p-4 h-full">
                <Product product={selectedProduct} onClose={handleProductClose} />
              </div>
            )}
          </div>
        );

      case 'Stores':
        return selectedStore ? (
          <Store store={selectedStore} onClose={handleStoreClose} /> // ✅ Show store directly
        ) : (
          <Stores onStoreClick={handleStoreOpen} />
        );

      case 'Basket':
        return <Basket />;
      case 'History':
        return <History />;
      case 'Profile':
        return <Profile />;
      default:
        return <div className="text-center text-gray-500">No content available.</div>;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-[100px] shadow-md flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">Welcome</h1>
      </div>

      {/* Middle Section */}
      <div className="flex-1 bg-white overflow-hidden">
        <div className="h-full p-4">{renderContent()}</div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white h-[100px] border-t border-gray-300 shadow-lg flex">
        {['Home', 'Stores', 'Basket', 'History', 'Profile'].map((label) => (
          <button
            key={label}
            onClick={() => handleTabChange(label)}
            className={`flex-1 flex flex-col items-center justify-center text-sm font-medium transition-all duration-200 ${
              activeTab === label
                ? 'text-indigo-600 font-semibold border-t-4 border-indigo-600 bg-indigo-50 shadow-inner'
                : 'text-gray-500 hover:text-indigo-500'
            }`}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
