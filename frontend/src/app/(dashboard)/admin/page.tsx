'use client'

import { useRequireAuth } from '@/hooks/useAuth'

export default function AdminDashboard() {
  useRequireAuth('admin')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Admin-specific widgets */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium">User Management</h3>
        </div>
      </div>
    </div>
  )
}