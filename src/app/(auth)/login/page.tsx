
'use client';

import Image from "next/image"; 
import Link from "next/link";

const PRIMARY_COLOR = "#FF4A37"; 

export default function Main() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center">
          <Image src="/trolla-logo.png" alt="Trolla Logo" width={100} height={100} /> 
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to Trolla</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Username</label> 
            <input
              type="text" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-[${PRIMARY_COLOR}] text-white py-2 rounded-lg hover:bg-white hover:text-[${PRIMARY_COLOR}] border border-[${PRIMARY_COLOR}] transition`} // Using defined constant
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
            Don't have an account? <Link href="/auth/signup" className={`text-[${PRIMARY_COLOR}] hover:underline`}>Sign up</Link> {/* Using Link component */}
          </p>
        </form>
      </div>
    </section>
  );
}
