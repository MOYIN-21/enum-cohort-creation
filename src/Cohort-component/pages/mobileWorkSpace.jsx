import React from 'react'
import { Outlet } from 'react-router-dom'
import Mobileoption from '../resueableomponents/Mobileoption'

const mobileWorkSpace = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <Mobileoption/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default mobileWorkSpace

