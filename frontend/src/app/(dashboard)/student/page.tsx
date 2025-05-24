'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StudentDashboard() {
  const router = useRouter()

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    if (role !== 'student') router.push(`/${role}`)
  }, [])

  return <h1 className="text-2xl font-bold">Student Dashboard</h1>
}