import React from 'react'
import Mobileoption from '../resueableomponents/Mobileoption';
import MobilePopOver from '../resueableomponents/MobileButtonPopOver';
import Board from '../resueableomponents/Board';

const organizations = () => {
  return (
  <div>
    <div className=''>
      <Board/>
      <div className='flex flex-col'>
      <Mobileoption/>
      </div>
    </div>
    <div className='md:hidden block'>
      <MobilePopOver/>
    </div>
    </div>
  )
}

export default organizations