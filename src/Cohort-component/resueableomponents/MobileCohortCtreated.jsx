import React, { useState } from 'react'
import { Button, FormControl, MenuItem } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { FiBriefcase } from "react-icons/fi";
import MobileButtonPopOver from './MobileButtonPopOver';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { Menu } from "@mui/material"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const MobileCohortCtreated = () => {
    const [activeButton, setActiveButton] = useState(""); 
    const cohorts = useSelector((state) => state.program.cohortsData);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [anchorEl, setAnchorEl] = useState(null);
    const [age, setAge] = useState('');
  
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

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div className='md:hidden block pt-8 px-5'>
          <p className='justify-start flex'>Switch between tabs</p>
          <Box sx={{ display: 300 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Switch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{
                  '& .MuiMenuItem-root': {
                    fontWeight: 'bold',
                    color: 'orange',
                  },
                }}
               >
              <MenuItem value={10}>
                <div className='flex gap-5'> 
                  <Button 
                    variant="text" 
                    sx={{ 
                      textTransform: 'none',
                      color: activeButton === 2 ? '#008EEF' : 'black', 
                      '&:hover': { 
                          backgroundColor: '#F6FCFF',
                          color: '#008EEF'
                      },
                      fontSize: 16,
                      lineHeight: '27px' 
                    }}
                    // onClick={() => handleClick("cohorts")}  
                    startIcon={<GroupIcon/>}
                  >
                    Cohorts
                  </Button>
                </div>
              </MenuItem>

              <MenuItem value={20}>
                <div className='flex gap-5'> 
                  <Button 
                    variant="text" 
                    sx={{ 
                      textTransform: 'none',
                      color: activeButton === 2 ? '#008EEF' : 'black', 
                      '&:hover': { 
                          backgroundColor: '#F6FCFF',
                          color: '#008EEF'
                      },
                      fontSize: 16,
                      lineHeight: '27px' 
                    }}
                    // onClick={() => handleClick(programs)}  
                    startIcon={<ImportContactsTwoToneIcon/>}
                  >
                    Programs
                  </Button>
                </div>
              </MenuItem>

              <MenuItem value={30}>
                <div className='flex gap-5'> 
                  <Button 
                    variant="text" 
                    sx={{ 
                      textTransform: 'none',
                      color: activeButton === 2 ? '#008EEF' : 'black', 
                      '&:hover': { 
                          backgroundColor: '#F6FCFF',
                          color: '#008EEF'
                      },
                      fontSize: 16,
                      lineHeight: '27px'
                    }}
                    // onClick={() => handleClick(instructors)}  
                    startIcon={<FiBriefcase />}
                  >
                    Instructors
                  </Button>
                </div>
              </MenuItem>

              <MenuItem value={40}>
                <div className='flex gap-5'> 
                  <Button 
                    variant="text" 
                    sx={{ 
                      textTransform: 'none',
                      color: activeButton === 3 ? '#008EEF' : 'black', 
                      '&:hover': { 
                          textDecoration: 'none',
                          backgroundColor: '#F6FCFF',
                          color: '#008EEF'
                      },
                      fontSize: 16,
                      lineHeight: '27px'
                    }}
                    // onClick={() => handleClick(learners)}  
                    startIcon={<PersonIcon />}
                  >
                    Learners
                  </Button>
                </div>
              </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className='flex flex-row justify-around'>
            <div>
              <MobileButtonPopOver/>
            </div>     
            <div className='pt-10'>
              <button onClick={handleClick} className=" border border-[#9CABB5] sm:text-xs h-10 sm:w-32 rounded-lg text-black flex flex-row items-center justify-center ">More Actions <MoreVertIcon/> </button>
            </div>
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

            <div className="max-w-md mx-auto pt-10">
            
              <form className="max-w-md mx-auto">   
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input
                      type="search"
                        id="input"
                        className="w-full ps-10 h-10 text-sm text-gray-900 border-gray-300 rounded-lg border-2 dark:placeholder-gray-400"
                        placeholder="Search"
                        required
                        value={searchTerm}
                        onChange={handleSearch} />
                      <button 
                      type="submit"
                      onClick={handleSearch}  
                      className="text-white absolute end-0 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-400">Search</button>
                    </div>
              </form>
                  {filteredCohorts.length > 0 ? ( 
                    filteredCohorts.map((cohort, index) => {
                      return (
                        <div key={index} className='flex shadow justify-start flex-row pt-10 bg-#FFFFFF'>
                          <div>
                            {/* {cohort.picture} */}
                          </div>

                          <div className='flex flex-col'>
                            <div className='flex justify-between'>
                              <div className='font-bold flex justify-start'>{cohort.cohortName}</div> 
                              <div onClick={handleClick} className='flex justify-end' >
                                  <MoreVertIcon sx={{display: "flex", justifyContent: "end"}}/>                              
                                </div> 
                              </div>
                              <div className='flex justify-start'>{cohort.program}</div>
                              <div className='flex flex-row'>
                              <PersonOutlineOutlinedIcon sx={{color: "#9CABB5"}}/> {cohort.learners}
                          </div>
                              Created {cohort.dateCreated}
                          </div>                                                      
                              <div onClick={handleClick} >
                              </div>                           
                        </div>
                      );
                    })
                  ) : ( 
                <p>No cohorts found matching your search criteria.</p>
              )}
      </div>
    </div>
  )
}

export default MobileCohortCtreated