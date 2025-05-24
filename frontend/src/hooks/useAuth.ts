'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'  // Make sure to import your API instance

export function useRequireAuth(requiredRole?: string) {
  const router = useRouter()

  useEffect(() => {
    const verifyRole = async () => {
      try {
        const response = await api.get('/auth/verify-role/')
        if (response.data.role !== localStorage.getItem('userRole')) {
          localStorage.setItem('userRole', response.data.role)
          router.push(`/${response.data.role}`)
        }
      } catch (error) {
        console.error('Role verification failed:', error)
        // Optional: Handle logout on verification failure
        localStorage.removeItem('token')
        localStorage.removeItem('userRole')
        router.push('/login')
      }
    }

    if (localStorage.getItem('token')) {
      verifyRole()
    }
  }, [router])  // Added router to dependencies

  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('userRole')

    if (!token) {
      router.push('/login')
    } else if (requiredRole && role !== requiredRole) {
      router.push(`/${role}`)
    }
  }, [router, requiredRole])  // Proper dependency array
}