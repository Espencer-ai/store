// app/customer/Basket.js
'use client'

import React from 'react';

export default function Basket() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className="w-[500px] h-[1000px] bg-red-500 text-white shadow-xl flex flex-col justify-center items-center px-6">
        <h2 className="text-3xl font-semibold mb-2">🧺 Basket</h2>
        <p className="text-lg text-center text-white/90">
          Here’s where your basket content will appear.
        </p>
      </div>
    </div>
  );
}
