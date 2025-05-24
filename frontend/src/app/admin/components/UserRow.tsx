'use client'

import React from 'react'

interface Props {
  name: string
  email: string
  role: string
}

const UserRow = ({ name, email, role }: Props) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  )
}

export default UserRow
