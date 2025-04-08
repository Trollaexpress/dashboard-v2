'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import { Eye, EyeOff, Sun, Moon } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme when it changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //login logic

    console.log({email, password, rememberMe});
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex h-screen items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-md px-6 py-8 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </div>
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/trolla-logo.png"
            alt="Trolla Logo White"
            width={120}
            height={40}
            className={`h-auto ${!isDarkMode && 'hidden'}`}
          />
          <Image
            src="/trolla-logo.png" 
            alt="Trolla Logo"
            width={120}
            height={40}
            className={`h-auto ${isDarkMode && 'hidden'}`}
          />
        </div>

        <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Welcome back!
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="name@trolla.com"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                isDarkMode 
                  ? 'border-gray-700 bg-gray-800 text-white' 
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                isDarkMode 
                  ? 'border-gray-700 bg-gray-800 text-white' 
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setShowPassword(!showPassword)}>
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
              <label htmlFor="remember" className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
