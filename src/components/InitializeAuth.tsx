'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { initializeAuth } from '../redux/slice/auth-slice';

type Cookies = {
  [key: string]: string;
};

export default function InitializeAuth() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Get tokens from cookies if they exist
    const cookies = document.cookie.split(';').reduce((acc: Cookies, cookie) => {
      const [key, value] = cookie.trim().split('=');
      return { ...acc, [key]: value };
    }, {});

    if (cookies.accessToken) {
      dispatch(initializeAuth());
    }
  }, [dispatch]);

  return null;
}