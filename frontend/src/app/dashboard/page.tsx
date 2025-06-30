'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={['STUDENT', 'INSTRUCTOR', 'ADMIN']}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-semibold mb-2">Welcome, {user?.name}</h1>
        <p className="mb-4 text-gray-600">Role: {user?.role}</p>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
}