'use client';

import {useState} from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //login logic

    console.log({email, password, rememberMe});
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md px-6 py-8 bg-gray-900 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/trolla_logo_white.png" 
            alt="Trolla Logo White" 
            width={120} 
            height={40}
            className="h-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Welcome back!</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="name@trolla.com"
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
