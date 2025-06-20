import React from 'react'
import Dashboard from './Dasboard'
import { Outlet } from 'react-router-dom'

const DasboardLayout = () => {
  return (
    <div className='flex h-screen '>
      <div className=' flex sticky top-0 h-screen'>
      <Dashboard/></div>
      <div className=' flex-1 overflow-y-auto  '>
        <Outlet/>
      </div>
    </div>
  )
}

export default DasboardLayout
