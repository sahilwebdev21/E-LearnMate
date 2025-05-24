import { ReactNode } from 'react'
import DashboardNav from '../components/dashboard/DashboardNav'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <main className="p-4 md:p-8 max-w-7xl mx-auto">{children}</main>
    </div>
  )
}