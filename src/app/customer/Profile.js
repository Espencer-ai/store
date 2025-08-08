'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      // Optionally clear auth/session here
      router.push('/login');
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-start bg-gray-100 overflow-y-auto">
      <div className="w-[500px] h-[1000px] bg-red-500 text-white shadow-xl flex flex-col items-center px-6 py-10 space-y-6">
        
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold">
          👤
        </div>

        {/* Name and Email */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-white/80 text-sm">john.doe@example.com</p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-4 mt-6">
          <button className="w-full bg-white text-red-500 py-2 rounded-lg font-semibold hover:bg-white/90 transition flex items-center justify-start px-4 gap-3">
            ✏️ Edit Profile
          </button>
          <button className="w-full bg-white text-red-500 py-2 rounded-lg font-semibold hover:bg-white/90 transition flex items-center justify-start px-4 gap-3">
            🔒 Change Password
          </button>
          <button className="w-full bg-white text-red-500 py-2 rounded-lg font-semibold hover:bg-white/90 transition flex items-center justify-start px-4 gap-3">
            ⚙️ Settings
          </button>
          <button className="w-full bg-white text-red-500 py-2 rounded-lg font-semibold hover:bg-white/90 transition flex items-center justify-start px-4 gap-3">
            ❓ Help & Support
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-white text-red-500 py-2 rounded-lg font-semibold hover:bg-white/90 transition flex items-center justify-start px-4 gap-3"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
