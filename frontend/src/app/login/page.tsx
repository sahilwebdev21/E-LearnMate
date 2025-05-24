'use client'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import AuthForm from '../components/auth/AuthForm'
import InputField from '../components/auth/InputField'
import SubmitButton from '../components/auth/SubmitButton'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await api.post('/auth/login/', { email, password })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userRole', response.data.user.role)
      switch (response.data.user.role) { // NEW: Role-based redirect
        case 'student':
          router.push('/student')
          break
        case 'instructor':
          router.push('/instructor')
          break
        case 'admin':
          router.push('/admin')
          break
        default:
          router.push('/')
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Invalid email or password')
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthForm
      title="Welcome back"
      subtitle="Don't have an account?"
      linkText="Register here"
      linkHref="/register"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-500 text-sm text-center mb-4">
            {error}
          </div>
        )}

        <InputField
          label="Email address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <div className="flex items-center justify-end">
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Forgot password?
          </a>
        </div>

        <SubmitButton text="Sign in" isLoading={isLoading} />
      </form>
    </AuthForm>
  )
}