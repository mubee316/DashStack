import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex'>
      <SideBar/>
      <NavBar/>
      
    </div>
    </>
  )
}

export default page