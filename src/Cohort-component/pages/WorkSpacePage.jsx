import React from 'react'
import { Outlet } from 'react-router-dom'
import LargeScreenSideBar from '../resueableomponents/LargeScreenSideBar'
import Mobileoption from '../resueableomponents/Mobileoption'

const WorkSpacePage = () => {
  return (
    <div>
    <div className='flex pt-20 px-20 gap-12 max-md:flex-col max-md:px-3'>
      <div className='max-md:hidden'>
        <LargeScreenSideBar />
      </div>
      {/* <div className='hidden max-md:block'>  <Mobileoption/> </div> */}
      
      <div className=' basis-5/6'>
        <Outlet />
      </div>
    </div>
    
    </div>
  )
}

export default WorkSpacePage