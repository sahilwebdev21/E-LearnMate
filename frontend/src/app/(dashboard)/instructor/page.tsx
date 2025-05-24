'use client'
import { useRequireAuth } from '@/hooks/useAuth'

export default function InstructorDashboard() {
  useRequireAuth('instructor')

  // Sample course data - replace with API call
  const courses = [
    { id: 1, title: 'Web Development 101', students: 45, status: 'published' },
    { id: 2, title: 'Advanced Python', students: 28, status: 'draft' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Instructor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Earnings Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Earnings Summary</h3>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-green-600">$2,450.00</p>
            <p className="text-sm text-gray-500">Last 30 days</p>
          </div>
        </div>

        {/* Active Courses */}
        <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Your Courses</h3>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-gray-500">
                      {course.students} students
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    course.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              Create New Course
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              View Earnings Report
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              Student Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}