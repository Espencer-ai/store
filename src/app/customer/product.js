'use client';
import React, { useState } from 'react';

export default function Product({ onClose }) {
  const [quantity, setQuantity] = useState(1); 
  const [stock, setStock] = useState(25); // ✅ Stock in state

  const increaseQty = () => {
    if (quantity < stock) {
      setQuantity(q => q + 1);
      setStock(s => s - 1); // ✅ Reduce stock when adding
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
      setStock(s => s + 1); // ✅ Restore stock when removing
    }
  };

  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col text-gray-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 left-0 bg-white hover:bg-gray-200 text-gray-700 w-16 h-16 rounded-full shadow-md flex items-center justify-center font-bold"
        >
          ✕
        </button>

        {/* Top (Green Header) */}
        <div
          className="bg-green-600 flex items-center justify-center text-white text-lg font-semibold mx-4 rounded-xl shadow-md"
          style={{ height: '35%', marginTop: '20px', marginBottom: '20px' }}
        >
          Product Preview
        </div>

        {/* Product Info & Quantity */}
        <div
          className="flex justify-between items-center text-black font-medium px-4 py-2"
          style={{ height: '6.25%' }}
        >
          {/* Left: Product Name + Stock */}
          <div className="flex flex-col justify-center bg-green-50 px-3 py-1 rounded w-[60%]">
            <span className="font-semibold text-sm">Product Name</span>
            <span className="text-xs text-gray-600">Stock: {stock}</span>
          </div>

          {/* Right: Quantity Controls */}
          <div className="flex items-center gap-2 w-[35%] justify-end">
            <button 
              onClick={decreaseQty}
              className="bg-gray-200 hover:bg-gray-300 text-black w-20 h-10 rounded shadow flex items-center justify-center text-lg"
            >
              -
            </button>
            <div className="flex items-center justify-center bg-gray-100 text-black font-semibold rounded shadow w-14 h-10 text-lg">
              {quantity}
            </div>
            <button 
              onClick={increaseQty}
              className="bg-gray-200 hover:bg-gray-300 text-black w-20 h-10 rounded shadow flex items-center justify-center text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Scrollable Section */}
        <div
          className="text-gray-800 font-medium overflow-y-auto rounded-lg mx-4 mt-3 bg-white p-4 shadow-inner border border-gray-200"
          style={{ height: '46.75%' }}
        >
          <p className="leading-relaxed text-sm text-gray-700">
            
          </p>
        </div>


        {/* Bottom (Buy Section) */}
        <div
          className="flex items-center justify-between px-4 mt-3 mx-4 rounded-lg"
          style={{ height: '12%' }}
        >
          <div className="text-xl font-bold text-black drop-shadow-sm">
            Total: ${quantity * 10}
          </div>
          <div>
            <button className="bg-white text-green-700 border-8 border-green-600 px-2 py-2 rounded-lg font-bold hover:bg-green-50 transition">
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
