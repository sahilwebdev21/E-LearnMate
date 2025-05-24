'use client'
import { useRequireAuth } from '@/hooks/useAuth'

export default function AdminDashboard() {
  useRequireAuth('admin')

  // Sample data - replace with API calls
  const stats = [
    { label: 'Total Users', value: '1,234' },
    { label: 'Active Courses', value: '89' },
    { label: 'Total Earnings', value: '$12,450' },
  ]

  const recentActivities = [
    { id: 1, type: 'user', action: 'New user registration', date: '2024-03-15' },
    { id: 2, type: 'course', action: 'Course "React Masterclass" approved', date: '2024-03-14' },
    { id: 3, type: 'payment', action: 'Payout processed ($2,340)', date: '2024-03-13' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Student
              </span>
            </div>
            {/* Add more user entries */}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-1">
                  <p className="text-gray-600">{activity.action}</p>
                  <p className="text-sm text-gray-400 mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <p className="text-2xl font-bold mb-1">99.9%</p>
              <p className="text-sm text-gray-600">Uptime</p>
            </div>
            <div className="text-center p-4 bg-blue-100 rounded-lg">
              <p className="text-2xl font-bold mb-1">2.3s</p>
              <p className="text-sm text-gray-600">Avg. Response</p>
            </div>
            {/* Add more metrics */}
          </div>
        </div>
      </div>
    </div>
  )
}