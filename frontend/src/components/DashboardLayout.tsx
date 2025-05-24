'use client'

import React from 'react'
import Link from 'next/link'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-container" style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#111', color: '#fff', padding: '20px' }}>
        <h2>E-LearnMate</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/student">Student</Link></li>
            <li><Link href="/instructor">Instructor</Link></li>
            <li><Link href="/admin">Admin</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: '20px', background: '#f4f4f4' }}>
        {/* Top Navbar */}
        <header style={{ background: '#fff', padding: '10px 20px', marginBottom: '20px' }}>
          <p>Dashboard Navbar</p>
        </header>

        {children}
      </main>
    </div>
  )
}

function logout() {
  localStorage.removeItem('access_token')
  window.location.href = '/login'
}

export default DashboardLayout
