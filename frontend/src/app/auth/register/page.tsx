'use client'

import React from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link href="/auth/login">Login</Link></p>
    </div>
  )
}
