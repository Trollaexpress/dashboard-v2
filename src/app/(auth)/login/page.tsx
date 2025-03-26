'use client';
import Image from 'next/image';
import { FormEvent } from 'react';

export default function Main() {
  const handleLoginSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
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

        <form className="space-y-4" onSubmit={handleLoginSubmit} noValidate>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black placeholder:text-gray-500 focus:ring-0 focus:border-trolla hover:border-trolla"
            placeholder="Username"
          />

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black placeholder:text-gray-500 focus:ring-0 focus:border-trolla hover:border-trolla"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full rounded-lg border border-trolla bg-trolla py-2 text-white transition hover:bg-white hover:text-trolla">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
