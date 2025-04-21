'use client';

import {useAppSelector} from '@/redux/hooks';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const {accessToken} = useAppSelector(state => state.auth);

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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      {/* Your dashboard content here */}
    </div>
  );
}
