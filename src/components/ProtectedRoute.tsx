// ProtectedRoute.tsx
'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useAppSelector} from '@/redux/hooks';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const {accessToken, user, isLoading} = useAppSelector(state => state.auth);

  useEffect(() => {
    if (!isLoading && (!accessToken || !user)) {
      router.push('/login');
    }
  }, [accessToken, user, isLoading, router]);

  if (isLoading || !accessToken || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
