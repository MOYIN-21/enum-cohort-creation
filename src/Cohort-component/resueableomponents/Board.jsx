import React, { useState } from 'react'
import LargeScreenNoCohort from './ LargeScreenNoCohort'
import CohortCreated from '../pages/CohortCreated'
import LargeScreenButtonPopOver from './LargeScreenButtonPopOver'
import LargeScreenSideBar from './LargeScreenSideBar'

const Board = () => {
    const [cohortss,setCohortss] = useState([])

  return (
    <div className='flex flex-row'>
        <div>
            <LargeScreenSideBar/>
        </div>
            {cohortss.length === 0 ? <div className="flex justify-center  gap-4 items-center flex-col w-3/5 ">
                <div className="flex flex-col items-center w-96 ">
                    <LargeScreenNoCohort/>
                </div>
                <LargeScreenButtonPopOver/>
            </div> :       
                <div className="">
                    <CohortCreated/>
                </div>


            }
        </div>
    )
}
export default Board