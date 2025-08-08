'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function Item({ onClose, onSubmit, mode, initialData }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const fileInputRef = useRef();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setQuantity(initialData.quantity || '');
      setPrice(initialData.price || '');
      setImage(initialData.image || null);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, quantity, price, image };
    onSubmit(formData);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-full md:w-[300px] md:h-auto bg-yellow-400 p-4 border-l border-yellow-600 relative overflow-y-auto">
      {/* Exit Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600"
        aria-label="Close"
      >
        ×
      </button>

      {/* Image Upload */}
      <div
        onClick={handleImageClick}
        className="w-full h-[150px] bg-gray-300 rounded-md mb-4 overflow-hidden flex items-center justify-center cursor-pointer hover:brightness-95"
      >
        {image ? (
          <img src={image} alt="Preview" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500">[ Click to Upload Image ]</span>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Entry Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 rounded border border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full mt-1 p-2 rounded border border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-1 p-2 rounded border border-gray-300"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full ${
            mode === 'create' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
          } text-white py-2 rounded`}
        >
          {mode === 'create' ? 'Submit' : 'Update'}
        </button>
      </form>
    </div>
  );
}
