import React from 'react'
import noCohort from '../../assets/nocohort.png'
import LargeScreenButtonPopOver from './LargeScreenButtonPopOver';
 
 const LargeScreenNoCohort =()=>{
    const handleShowModal = (value) => {
        setShowModal(value)
    }

  return (
    <div className='justify-center flex flex-col items-center'>
      <div className=''>
          <img src={noCohort} alt="" />
      </div>
      <div className='font-bold pt-5'>Empty Space</div>
      <div className='px-5 py-4 text-center w-2/6'>No cohort has been created yet, let's get you started by clicking the button below</div>
      <div className='pt-7'>
        <LargeScreenButtonPopOver />
      </div>
    </div>
  )
}
export default LargeScreenNoCohort
