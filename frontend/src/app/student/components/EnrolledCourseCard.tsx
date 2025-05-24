'use client'

import React from 'react'

interface CourseCardProps {
  title: string
  instructor: string
  progress: number // % completion
}

const EnrolledCourseCard = ({ title, instructor, progress }: CourseCardProps) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <p><strong>Instructor:</strong> {instructor}</p>
      
      <div style={{ marginTop: '10px' }}>
        <label>Progress: {progress}%</label>
        <div style={{ background: '#eee', borderRadius: '5px', overflow: 'hidden', height: '10px' }}>
          <div style={{
            width: `${progress}%`,
            background: '#4caf50',
            height: '10px'
          }} />
        </div>
      </div>
    </div>
  )
}

export default EnrolledCourseCard
