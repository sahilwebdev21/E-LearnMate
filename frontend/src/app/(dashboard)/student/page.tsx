'use client'
import { useRequireAuth } from '@/hooks/useAuth'

export default function StudentDashboard() {
  useRequireAuth('student')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Active Courses</h3>
          {/* Course list */}
        </div>
      </div>
    </div>
  )
}