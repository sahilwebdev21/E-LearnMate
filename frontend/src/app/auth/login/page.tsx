'use client'

import React, { useState } from 'react'
import Link from 'next/link'


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

interface MyToken {
  role: "student" | "instructor" | "admin";
  exp: number;
}

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()

  const res = await fetch('http://localhost:8000/api/auth/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()

  if (res.ok) {
    const accessToken = data.tokens.access
    localStorage.setItem('access_token', accessToken)

    const decoded = jwt_decode<MyToken>(accessToken)

    // ✅ Redirect user based on role
    if (decoded.role === 'student') {
      window.location.href = '/student'
    } else if (decoded.role === 'instructor') {
      window.location.href = '/instructor'
    } else if (decoded.role === 'admin') {
      window.location.href = '/admin'
    }
  } else {
    alert("Invalid login!")
  }
}

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don&apos;t have an account? <Link href="/auth/register">Register</Link>
      </p>
    </div>
  )
}
