import React, { useState } from 'react';
import { Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { FiBriefcase } from "react-icons/fi";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import LargeScreenButtonPopOver from './LargeScreenButtonPopOver';
import LargeScreenNoCohort from './ LargeScreenNoCohort';
import { useSelector } from 'react-redux';
import CohortCreated from '../pages/CohortCreated';


const SideSide = () => {
  const cohorts = useSelector((state) => state.program.cohortsData);
  const [activeButton, setActiveButton] = useState(""); 



  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className='flex'>
        <div className='md:px-20 pt-10 gap-6 px-5 md:flex flex-col hidden sm:block'>
          <div className='flex gap-5'> 
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: 'none',
                  fontSize: 16,
                  lineHeight: '27px',
                  color: activeButton === "cohort" ? '#008EEF' : '#475661',
                  '&:hover': { 
                      backgroundColor: '#F6FCFF',
                      color: '#008EEF'
                  }
                }}
                onClick={() => handleButtonClick("cohort")}
                startIcon={<GroupIcon />}
              >
                Cohorts
              </Button>
          </div>

          <div className='flex gap-5'>
          {/* <Link to="/programs">   */}
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: 'none',
                  fontSize: 16,
                  lineHeight: '27px',
                  color: activeButton === "program" ? '#008EEF' : '#475661',
                  '&:hover': { 
                      backgroundColor: '#F6FCFF',
                      color: '#008EEF'
                  }
                }}
                onClick={() => handleButtonClick("program")}
                startIcon={<ImportContactsTwoToneIcon />}
              >
                Programs
              </Button>
              {/* </Link> */}
          </div>

          <div className='flex gap-5'> 
          {/* <Link to="/instructors">  */}
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: 'none',
                  fontSize: 16,
                  lineHeight: '27px',
                  color: activeButton === "instructor" ? '#008EEF' : '#475661',
                  '&:hover': { 
                      backgroundColor: '#F6FCFF',
                      color: '#008EEF'
                  }
                }}
                onClick={() => handleButtonClick("instructor")}
                startIcon={<FiBriefcase />}
              >
                Instructors
              </Button>
              {/* </Link> */}
          </div>

          <div className='flex gap-5'> 
          {/* <Link to="/learner">  */}
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: 'none',
                  fontSize: 16,
                  lineHeight: '27px',
                  color: activeButton === "learner" ? '#008EEF' : '#475661',
                  '&:hover': { 
                      textDecoration: 'none',
                      backgroundColor: '#F6FCFF',
                      color: '#008EEF'
                  }
                }}
                onClick={() => handleButtonClick("learner")}
                startIcon={<PersonIcon />}
              >
                Learners
              </Button>
              {/* </Link> */}
          </div>
        </div>

        {cohorts.length > 1 && <div className='flex justify-center items-center h-full w-full'>
          {activeButton === "program" && (
            <div className='flex flex-col justify-center items-center'>
            </div>
          )}
          {activeButton === "instructor" && (
            <div className='flex flex-col justify-center items-center'>
            </div>
          )}
          {activeButton === "learner" && (
            <div className='flex flex-col justify-center items-center'>
            </div>
          )}
        </div>}
      </div>
    </div>
  );
};

export default SideSide;
