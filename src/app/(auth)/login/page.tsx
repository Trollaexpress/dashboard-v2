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
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black focus:ring focus:ring-black placeholder:text-gray-500"
              placeholder="Username"
              required
            />
          </div>

         
          <div>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black focus:ring focus:ring-black placeholder:text-gray-500"
              placeholder="Password"
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full rounded-lg border border-[#FF4329] bg-[#FF4329] py-2 text-white transition hover:bg-white hover:text-[#FF4329]"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
