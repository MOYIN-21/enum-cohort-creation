import React from 'react'
import LargeScreenNoCohort from '../resueableomponents/ LargeScreenNoCohort';
import CohortCreated from './CohortCreated';
import { useSelector } from 'react-redux';


const Cohorts = () => {
  const cohorts = useSelector((state) => state.program.cohortsData)

  return (
    <div className='hidden sm:block'>
        <div className='text-3xl font-serif justify-start px-16 font-normal flex'>
          Cohorts
        </div>
        {cohorts.length < 1 ? <div>
           <LargeScreenNoCohort/>
        </div>
        :
        <div >
          <CohortCreated cohorts={cohorts}/>
        </div>}
    </div>
  )
}

export default Cohorts