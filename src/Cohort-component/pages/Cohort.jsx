import { Group } from '@mui/icons-material'
import React from 'react'
import { Button, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import LargeScreenNoCohort from '../resueableomponents/ LargeScreenNoCohort';
import LargeScreenSideBar from '../resueableomponents/LargeScreenSideBar';
import LargeScreenButtonPopOver from '../resueableomponents/LargeScreenButtonPopOver';

const Cohorts = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className=''>
        <div>
            {/* <p>COHORT</p> */}
            <div>
                {/* <input type="search" name="searchCohort" id="cohortId" placeholder='Enter cohort' /> */}
            </div>
        </div>
            <LargeScreenSideBar/>
           <LargeScreenNoCohort/>
           <LargeScreenButtonPopOver/>
    </div>
  )
}

export default Cohorts