import React from 'react'
import noCohort from '../../assets/nocohort.png'
import Button from '@mui/joy/Button';

// import { Link } from "react-router-dom";
 
 const LargeScreenNoCohort =()=>{
    const handleShowModal = (value) => {
        setShowModal(value)
    }

  return (
    <div className='justify-center flex'>
        <div className=''>
            <div className='justify-center flex '>
                <img src={noCohort} alt="" />
            </div>
            <div className='font-bold pt-5'>Empty Space</div>
            <div className='px-5 pt-4'>No cohort has been created yet, let's get you started by clicking the button below</div>
        </div>
    </div>
  )
}
export default LargeScreenNoCohort
