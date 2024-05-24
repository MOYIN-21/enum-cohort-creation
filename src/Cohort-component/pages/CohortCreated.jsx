import React, { useState, MouseEvent } from 'react';
import LargeScreenSideBar from '../resueableomponents/LargeScreenSideBar';
import LargeScreenButtonPopOver from '../resueableomponents/LargeScreenButtonPopOver';
import { useSelector } from 'react-redux';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from "@mui/material"
import SideSide from '../resueableomponents/SideSide';
import C1 from '../../assets/C1.png'
import { Box } from '@mui/material';


const CohortCreated = () => {
  const cohorts = useSelector((state) => state.program.cohortsData)
  const [searchTerm, setSearchTerm] = useState(''); 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

  const handleClose = () => {
    setAnchorEl(null);
};


  const handleSearch = (event) => {
    event.preventDefault(); 
    setSearchTerm(event.target.value); 
  };

  const filteredCohorts = cohorts.filter((cohort) => {
    const lowerCaseCohortName = cohort.cohortName.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCaseCohortName.includes(lowerCaseSearchTerm);
  });

  return (
    <div className='flex w-full'>
      <SideSide />
      <div className='pt-10 w-full'>
        <div className='text-3xl font-serif justify-start px-16 flex'>
          cohort
        </div>

        <div className='flex justify-between px-16 pt-10 '>
          <div className="">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="input"
                className="w-96 p-4 ps-10 h-10 text-sm text-gray-900 border-gray-300 rounded-lg border-2 dark:placeholder-gray-400"
                placeholder="Search"
                required
                value={searchTerm}
                onChange={handleSearch} 
              />
            </div>
          </div>
          <div className='flex gap-5 '>
            <LargeScreenButtonPopOver/>
            <button onClick={handleClick} className=" border border-[#9CABB5] md:w-44 sm:text-xs sm:w-32 h-10 rounded-lg text-black flex flex-row items-center justify-center gap-6">More Actions <MoreVertIcon/> </button>

          </div>
        </div>
          <Box overflow="auto" height={500}>
        {filteredCohorts.length > 0 ? ( 
          filteredCohorts.map((cohort, index) => {
            return (
              <div key={index} className='flex flex-row justify-between pt-10 h-22 px-16'>
                <div className='flex flex-row gap-5'>
                <div className=''> <img src={C1} alt="" /> </div>
                <div className='flex flex-col'>
                  <div className='font-bold flex justify-start'>{cohort.cohortName}</div>
                  <div className='flex flex-row gap-10'>
                    <div className=''>{cohort.program}</div>
                    <div> <PersonOutlineOutlinedIcon sx={{color: "#9CABB5"}}/> {cohort.learners}</div>
                  </div>
                  </div>
                  
                </div>
                
                <div className='flex flex-row'>
                  <div className='flex gap-5'>
                    Created {cohort.dateCreated}
                    <div onClick={handleClick} >
                      <MoreVertIcon/>
                    </div>
                     
                  </div>
                   
                </div>
                
              </div>
            );
          })
        ) : ( 
          <p>No cohorts found matching your search criteria.</p>
        )}</Box>
      </div>
      <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>publish a poll</MenuItem>
                <MenuItem>schedule a event</MenuItem>
                <MenuItem>Make an annoucement</MenuItem>
            </Menu>
    </div>
  );
};

export default CohortCreated;
