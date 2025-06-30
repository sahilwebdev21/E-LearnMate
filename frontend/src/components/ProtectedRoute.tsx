'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({
  allowedRoles,
  children,
}: {
  allowedRoles?: string[];
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.push('/unauthorized'); // optional unauthorized page
    }
  }, [user, allowedRoles, router]);

  if (!user) return null; // or loader
  if (allowedRoles && !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
