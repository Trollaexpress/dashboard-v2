'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';

export default function Main() {
  const router = useRouter();
  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken && user) {
      router.push('/dashboard'); 
    } else {
      router.push('/login');
    }
  }, [accessToken, user, router]);

  return null; 
}