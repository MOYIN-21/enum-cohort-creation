import { Group } from '@mui/icons-material'
import React from 'react'
import { Button, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import LargeScreenNoCohort from '../resueableomponents/ LargeScreenNoCohort';
import LargeScreenSideBar from '../resueableomponents/LargeScreenSideBar';
import LargeScreenButtonPopOver from '../resueableomponents/LargeScreenButtonPopOver';
import CohortCreated from './CohortCreated';
import { useSelector } from 'react-redux';


const Cohorts = () => {
  const cohorts = useSelector((state) => state.program.cohortsData)



  return (
    <div className=''>
        <div className='text-3xl font-serif justify-start px-16 font-normal flex'>
          Cohorts
        </div>
        {cohorts.length < 1 ? <div>
           <LargeScreenNoCohort/>
        </div>
        :
        <div>
          <CohortCreated cohorts={cohorts}/>
        </div>}
           {/* <LargeScreenButtonPopOver/> */}
    </div>
  )
}

export default Cohorts