import React from 'react'
import { Link } from 'react-router-dom'

const UserDetails = () => {
  return (
    <div className=' relative top-32 left-20'>
      <h1>//user details</h1>
      <Link to="/">
      <h1 className=' bg-green-400 rounded-full p-3 relative w-40 top-36 left-50'>go back to home </h1></Link>
    </div>
  )
}

export default UserDetails
