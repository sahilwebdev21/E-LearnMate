'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardNav() {
  const router = useRouter()
  const role = localStorage.getItem('userRole')?.toLowerCase() || 'student'

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    router.push('/login')
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            href={`/${role}`} 
            className="text-xl font-bold text-gray-800"
          >
            E-LearnMate
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}