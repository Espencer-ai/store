'use client';
import React from 'react';

export default function Stores({ onStoreClick }) {
  return (
    <div className="bg-green-50 min-h-screen p-4">
      {/* Store Boxes */}
      <div className="flex flex-wrap mt-[20px] justify-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index}
            onClick={() => onStoreClick(`Store ${index + 1}`)} 
            className="bg-white rounded-lg shadow-md mb-[40px] mr-[20px] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            style={{
              flex: '1 1 calc(20% - 20px)',
              maxWidth: 'calc(20% - 20px)',
              minWidth: '200px',
              aspectRatio: '1 / 1',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Store Logo */}
            <div className="bg-gray-300 flex items-center justify-center text-gray-700 font-bold" style={{ height: '70%' }}>
              Logo
            </div>

            {/* Store Name */}
            <div className="bg-green-600 flex items-center justify-center text-white font-semibold" style={{ height: '30%' }}>
              Store {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
