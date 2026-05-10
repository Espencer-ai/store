'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Added optimized Image component
import Item from './Item';

export default function Product() {
  const [showYellowPanel, setShowYellowPanel] = useState(false);
  const [boxes, setBoxes] = useState(Array(10).fill(null));
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedBoxIndex(index);
    setShowYellowPanel(true);
  };

  const handleClosePanel = () => {
    setShowYellowPanel(false);
    setSelectedBoxIndex(null);
  };

  const handleAddBox = (data) => {
    if (selectedBoxIndex !== null) {
      const updatedBoxes = [...boxes];
      updatedBoxes[selectedBoxIndex] = data;
      setBoxes(updatedBoxes);
    } else {
      setBoxes((prev) => [...prev, data]);
    }
    setShowYellowPanel(false);
    setSelectedBoxIndex(null);
  };

  const handleAddProductClick = () => {
    setSelectedBoxIndex(null);
    setShowYellowPanel(true);
  };

  return (
    <div className="w-full min-h-screen flex bg-gray-100 relative">
      {/* Product Grid */}
      <div className="flex-1 bg-white p-4 md:p-6 overflow-auto transition-all duration-300">
        <div
          className={`grid gap-4 md:gap-6 mb-8 ${
            showYellowPanel ? 'grid-cols-3' : 'grid-cols-3 md:grid-cols-5'
          }`}
        >
          {boxes.map((box, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-full aspect-[3/4] bg-gray-100 rounded-xl shadow-sm mb-[50px] overflow-hidden hover:shadow-md hover:bg-gray-50 active:scale-[0.98] transition flex flex-col"
            >
              {/* Top 70%: Image */}
              <div className="w-full h-[70%] bg-gray-200 relative">
                {box?.image ? (
                  /* Added unoptimized because these are likely local blob URLs or external links */
                  <Image
                    src={box.image}
                    alt={box.name || "Product"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* Middle 15%: Name */}
              <div className="w-full h-[15%] bg-white text-gray-800 font-semibold text-center text-sm flex items-center justify-center border-t border-gray-200">
                {box?.name || 'Unnamed Product'}
              </div>

              {/* Bottom 15%: Quantity and Price */}
              <div className="w-full h-[15%] bg-gray-50 text-gray-700 text-xs px-2 flex items-center justify-between border-t border-gray-200">
                <span>Qty: {box?.quantity || '-'}</span>
                <span>₱{box?.price || '0'}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Add Product Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddProductClick}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            + Add Product
          </button>
        </div>
      </div>

      {/* Yellow Panel - Fullscreen on mobile */}
      {showYellowPanel && (
        <div className="w-full md:w-[300px] h-full fixed md:static top-0 right-0 z-40 md:z-auto">
          <Item
            onClose={handleClosePanel}
            onSubmit={handleAddBox}
            mode={selectedBoxIndex !== null ? 'update' : 'create'}
            initialData={selectedBoxIndex !== null ? boxes[selectedBoxIndex] : null}
          />
        </div>
      )}
    </div>
  );
}
