'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardNav() {
  const router = useRouter()
  const role = localStorage.getItem('userRole')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    router.push('/login')
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            <Link href={`/${role}`} className="font-medium text-gray-700">
              Dashboard
            </Link>
            {role === 'admin' && (
              <Link href="/admin/users" className="text-gray-500 hover:text-gray-700">
                Manage Users
              </Link>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}