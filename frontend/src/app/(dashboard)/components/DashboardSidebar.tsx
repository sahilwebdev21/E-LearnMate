'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const roleNavigation = {
  student: [
    { name: 'My Courses', href: '/student' },
    { name: 'Enroll', href: '/student/enroll' },
    { name: 'Progress', href: '/student/progress' },
  ],
  instructor: [
    { name: 'My Courses', href: '/instructor' },
    { name: 'Create Course', href: '/instructor/create' },
    { name: 'Earnings', href: '/instructor/earnings' },
  ],
  admin: [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Courses', href: '/admin/courses' },
    { name: 'Reports', href: '/admin/reports' },
  ],
}

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const role = localStorage.getItem('userRole')?.toLowerCase() || 'student'
  const navigation = roleNavigation[role as keyof typeof roleNavigation] || []

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg z-50"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}>
        <div className="p-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg ${pathname === item.href ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}