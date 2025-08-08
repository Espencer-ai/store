'use client';
import React from 'react';

export default function Home({ onBoxClick }) {
  return (
    <div className="bg-green-500 min-h-screen p-4">
      {/* 15 Square Boxes */}
      <div className="flex flex-wrap mt-[20px] justify-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            onClick={() => onBoxClick(`Product ${index + 1}`)} // ✅ When clicked, pass product data
            className="bg-white rounded-lg shadow-md mb-[40px] mr-[20px] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
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

            {/* Bottom (15%) split into 2 divs */}
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
  );
}
