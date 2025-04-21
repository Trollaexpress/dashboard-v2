'use client';

import Image from 'next/image';
import {RootState} from '../../../redux/store';
import {FormEvent, useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {loginUser} from '../../../redux/slice/auth-slice';
import {useRouter} from 'next/navigation';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const {isLoading, error, accessToken, user} = useAppSelector(
    (state: RootState) => state.auth,
  );
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (accessToken && user) {
      router.push('/dashboard');
    }
  }, [accessToken, user, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({email, password})).unwrap();

      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Login Failed:', err);
    }
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
            style={{width: 'auto', height: 'auto'}}
          />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-0 focus:border-trolla hover:border-trolla"
            placeholder="Email"
            required
          />

          <div className="relative">
            <input
              id="password"
              type={isPasswordVisible ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-black placeholder:text-gray-500 outline-none focus:ring-0 focus:border-trolla hover:border-trolla pr-10"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-trolla focus:outline-none">
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg border border-trolla bg-trolla py-2 text-white transition hover:bg-white hover:text-trolla disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  );
}
