'use client'

import React from 'react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don&apos;t have an account? <Link href="/auth/register">Register</Link></p>
    </div>
  )
}
