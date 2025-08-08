'use client'

import { useRouter } from 'next/navigation'

export default function Customer() {
  const router = useRouter()

  const handleRedirect = async (e) => {
    e.preventDefault()

    // Simulate lazy behavior (optional)
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Redirect to login page
    router.push('/login')
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleRedirect}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Customer Registration
        </h2>

        {/* Form fields (optional, not required anymore) */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Full Name</label>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
            />
          </div>
        </div>

        {/* Age & Birthday */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Age & Birthday</label>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="age"
              type="number"
              placeholder="Age"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
            />
            <input
              name="birthday"
              type="date"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg text-black"
            />
          </div>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Contact Number</label>
          <input
            name="contactNumber"
            type="tel"
            placeholder="09XXXXXXXXX"
            className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="email@example.com"
            className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Address</label>
          <input
            name="address"
            placeholder="Street, City, Province"
            className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  )
}
