'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

const User = () => {
  return (
    <button onClick={()=> signOut()}>sign out</button>
  )
}

export default User