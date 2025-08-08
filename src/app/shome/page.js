'use client';

import React from 'react';
import CustomerPage from '../customer/page';
import SellerPage from '../seller/page';
import AdminPage from '../admin/page';

export default function WhiteCanvasPage() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <CustomerPage />
    </div>
  );
}
