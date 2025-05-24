'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useRequireAuth } from '@/hooks/useAuth'

export default function InstructorDashboard() {
    useRequireAuth('instructor')
  const router = useRouter()

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    if (role !== 'student') router.push(`/${role}`)
  }, [])

  return <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
}