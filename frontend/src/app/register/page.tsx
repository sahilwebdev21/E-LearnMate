'use client'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import AuthForm from '../components/auth/AuthForm'
import InputField from '../components/auth/InputField'
import SubmitButton from '../components/auth/SubmitButton'

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      const response = await api.post('/auth/register/', {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirm_password: confirmPassword
      })
      
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userRole', response.data.user.role)
      switch (response.data.user.role) { // NEW
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
    setError(
      err.response?.data?.email?.[0] || 
      err.response?.data?.password?.[0] || 
      'Registration failed'
    )
  } else {
    setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthForm
      title="Create your account"
      subtitle="Already have an account?"
      linkText="Login here"
      linkHref="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-500 text-sm text-center mb-4">
            {error}
          </div>
        )}
        
        <div className="flex gap-4">
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

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
          autoComplete="new-password"
          required
          minLength={8}
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          required
          minLength={8}
        />

        <SubmitButton text="Create Account" isLoading={isLoading} />
      </form>
    </AuthForm>
  )
}