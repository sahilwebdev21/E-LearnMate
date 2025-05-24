'use client'

import React from 'react'

interface Props {
  name: string
  email: string
}

const InstructorApplicationCard = ({ name, email }: Props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '10px',
      background: '#fff'
    }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <button style={{
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        marginRight: '10px',
        cursor: 'pointer'
      }}>Approve</button>
      <button style={{
        backgroundColor: '#f44336',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
      }}>Reject</button>
    </div>
  )
}

export default InstructorApplicationCard
