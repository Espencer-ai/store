'use client'

import React, { useState } from 'react'
import Customer from './customer'
import Seller from './seller'

export default function Page() {
  const [view, setView] = useState(null)

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* 🔝 Top margin at the very top of the page */}
      <div className="mt-6 w-full max-w-5xl">
        <div className="flex w-full">
          <button
            onClick={() => setView('customer')}
            className="w-1/2 px-4 py-4 bg-yellow-400 text-black font-semibold rounded-none"
          >
            Customer
          </button>
          <button
            onClick={() => setView('seller')}
            className="w-1/2 px-4 py-4 bg-red-500 text-white font-semibold rounded-none"
          >
            Seller
          </button>
        </div>
      </div>

      {/* 🔽 Content Section */}
      <div className="w-full max-w-5xl px-4 mt-6 border border-gray-300 rounded p-4">
        {view === 'customer' && <Customer />}
        {view === 'seller' && <Seller />}
        {!view && (
          <p className="text-center text-gray-500">
            Please select Customer or Seller to begin.
          </p>
        )}
      </div>
    </div>
  )
}
