'use client'

import React from 'react'

interface Props {
  title: string
  enrolledCount: number
  status: 'published' | 'draft'
}

const InstructorCourseCard = ({ title, enrolledCount, status }: Props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      marginBottom: '16px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <h3>{title}</h3>
      <p><strong>Enrolled:</strong> {enrolledCount}</p>
      <p><strong>Status:</strong> <span style={{ color: status === 'published' ? 'green' : 'orange' }}>{status}</span></p>
    </div>
  )
}

export default InstructorCourseCard
