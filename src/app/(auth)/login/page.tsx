'use client';
import Image from 'next/image';
import { FormEvent } from 'react';

export default function Main() {
  const handleLoginSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();

    // Handle form submission logic here
  };

  return (
    <section className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
        <div className="flex justify-center">
          <Image 
            src="/trolla-logo.png" 
            alt="Trolla Logo" 
            width={100} 
            height={100} 
            priority 
            style={{ width: 'auto', height: 'auto' }} 
          />
        </div>
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          <div>
            <label className="block text-sm py-2 font-medium text-gray-600" htmlFor="email">
              Username
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black focus:ring focus:ring-primary placeholder:text-gray-500"
              placeholder="Enter your Username"
              required
            />
          </div>
          <div>
            <label className="block text-sm py-2 font-medium text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black focus:ring focus:ring-primary placeholder:text-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg border border-[#FF4A37] bg-[#FF4A37] py-2 text-white transition hover:bg-white hover:text-[#FF4A37]"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
