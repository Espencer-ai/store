'use client';
import React from 'react';

export default function Store({ store, onClose }) {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col h-full">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow w-fit"
      >
        ✕
      </button>

      {/* Enlarged Store Title */}
      <div className="bg-yellow-500 p-6 rounded-md mb-4">
        <h2 className="text-3xl font-bold text-white">{store}</h2>
      </div>

      {/* Container for Orange Grid & Blue Product Section */}
      <div className="flex flex-1 gap-4 h-full">
        {/* Orange Product Grid (Hidden in mobile) */}
        <div className="bg-orange-500 overflow-y-auto pt-4 pb-[20px] flex-1 hidden lg:block" style={{ height: '550px' }}>
          <div className="flex flex-wrap mt-[20px] justify-center">
            {Array.from({ length: 24 }).map((_, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md mb-[40px] mr-[20px] overflow-hidden cursor-pointer hover:scale-105 transition-transform ml-[10px]"
                style={{
                  flex: '1 1 calc(16.66% - 20px)',
                  maxWidth: 'calc(16.66% - 20px)',
                  minWidth: '200px',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Top (70%) */}
                <div className="bg-blue-500 flex items-center justify-center text-white font-bold" style={{ height: '70%' }}>
                  Image
                </div>

                {/* Middle (15%) */}
                <div className="bg-yellow-500 flex items-center justify-center text-black font-semibold" style={{ height: '15%' }}>
                  Product {index + 1}
                </div>

                {/* Bottom (15%) */}
                <div className="flex" style={{ height: '15%' }}>
                  <div className="bg-orange-500 w-1/2 flex items-center justify-center text-white font-semibold">
                    Price
                  </div>
                  <div className="bg-red-500 w-1/2 flex items-center justify-center text-white font-bold">
                    Qty
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Section with Product.js */}
        <div className="bg-blue-500 w-full lg:w-[400px] rounded-md shadow-md p-4 flex overflow-y-auto">
          {/* Blank */}
        </div>
      </div>
    </div>
  );
}
