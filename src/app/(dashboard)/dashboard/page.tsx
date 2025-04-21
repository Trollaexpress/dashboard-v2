'use client';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      router.push('/login');
    }
  }, [accessToken, router]);



  if (!accessToken) {
    return null; 
  }

  return (
    <div className="p-6">
      {/* ... rest of your dashboard code ... */}
    </div>
  );
}