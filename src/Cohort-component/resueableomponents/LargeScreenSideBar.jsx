import React, { useState } from 'react'
import { Button } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { FiBriefcase } from "react-icons/fi";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

const LargeScreenSideBar = () => {
  // const [open, setOpen] = React.useState(false);
  const [activeButton, setActiveButton] = useState(""); 
  // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div>
      <div className='flex'>
        <div className='md:px-20 pt-10 gap-6 px-5 md:flex flex-col hidden sm:block'>
          <div className='flex gap-5'> 
            <Link to="/cohort">
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: 'none',
                  color: activeButton === 0 ? '#008EEF' : 'black', 
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
            </Link>
          </div>

          <div className='flex gap-5'> 
            <Link to='/programs'> 
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: 'none',
                  color: activeButton === 1 ? '#008EEF' : 'black', 
                  '&:hover': { 
                      backgroundColor: '#F6FCFF',
                      color: '#008EEF'
                  },
                  fontSize: 16,
                  lineHeight: '27px' 
                }}
                onClick={() => handleClick(programs)}  
                startIcon={<ImportContactsTwoToneIcon/>}
              >
                Programs
              </Button>
            </Link>
          </div>

          <div className='flex gap-5'> 
            <Link to='/instructors'>
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
                onClick={() => handleClick(instructors)}  
                startIcon={<FiBriefcase />}
              >
                Instructors
              </Button>
            </Link>
          </div>

          <div className='flex gap-5'> 
            <Link to="/learner"> 
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
                onClick={() => handleClick(learners)}  
                startIcon={<PersonIcon />}
              >
                Learners
              </Button>
            </Link>
          </div>
        </div>

        {activeButton==="cohorts"?<div className='font-bold text-3xl pt-10'>COHORT</div>:activeButton==="learners"?<div>hello learners</div>:activeButton==="programs"?<div>Programs</div>:activeButton==="instructors"?<div>Hi Instructors</div>:<div>empty state</div>}
    </div>
    </div>
  )
}

export default LargeScreenSideBar