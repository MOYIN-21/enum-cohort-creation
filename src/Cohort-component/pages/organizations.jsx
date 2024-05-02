import React, { useState } from 'react'
import LargeScreenSideBar from '../resueableomponents/LargeScreenSideBar';
import Mobileoption from '../resueableomponents/Mobileoption';
import LargeScreenButtonPopOver from '../resueableomponents/LargeScreenButtonPopOver';
import MobilePopOver from '../resueableomponents/MobileButtonPopOver';
import LargeScreenNoCohort from '../resueableomponents/ LargeScreenNoCohort';


const organizations = () => {
  const [activeButton, setActiveButton] = useState(""); 
  const handleClick = (value) => {
    setActiveButton(value);
  };

  return (
  <div>
    <div className=''>
      <LargeScreenSideBar/>
      <div className='flex flex-col'>
      <Mobileoption/>
      </div>
      <LargeScreenNoCohort/>
      <LargeScreenButtonPopOver/>
      
    </div>
    <div className='md:hidden block'>
      <MobilePopOver/>
    </div>
    </div>
  )
}

export default organizations