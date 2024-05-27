import React from 'react'
import { Outlet } from 'react-router-dom'
import LargeScreenSideBar from '../resueableomponents/LargeScreenSideBar'

const WorkSpacePage = () => {
  return (
    <div className='flex pt-20 px-20 gap-12'>
      <LargeScreenSideBar />
      <div className=' basis-5/6'>
        <Outlet />
      </div>
    </div>
  )
}

export default WorkSpacePage