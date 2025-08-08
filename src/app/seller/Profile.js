'use client';

import React, { useState } from 'react';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan@example.com',
    phone: '+63 912 345 6789',
    address: '123 Main Street, Manila',
    company: 'Acme Corp.',
    role: 'Seller',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const confirmed = window.confirm('Are you sure you want to save these changes?');
    if (!confirmed) return;

    setEditing(false);
    // Add API save logic here if needed
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
      {/* Profile Picture */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          {form.firstName} {form.lastName}
        </h2>
      </div>

      <div className="flex justify-between items-center pt-4">
        <p className="text-sm text-gray-500">Manage your account details</p>
        <button
          onClick={() => (editing ? handleSave() : setEditing(true))}
          className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          {editing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <hr className="border-gray-200" />

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          ['First Name', 'firstName'],
          ['Last Name', 'lastName'],
          ['Email', 'email'],
          ['Phone Number', 'phone'],
          ['Company', 'company'],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="text-sm text-gray-500 mb-1 block">{label}</label>
            {editing ? (
              <input
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800 font-medium">{form[name]}</p>
            )}
          </div>
        ))}

        {/* Address */}
        <div className="md:col-span-2">
          <label className="text-sm text-gray-500 mb-1 block">Address</label>
          {editing ? (
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-800 font-medium">{form.address}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Role</label>
          {editing ? (
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Seller</option>
              <option>Admin</option>
              <option>Manager</option>
            </select>
          ) : (
            <p className="text-gray-800 font-medium">{form.role}</p>
          )}
        </div>
      </div>
    </div>
  );
}
