import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { FiBriefcase } from "react-icons/fi";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const LargeScreenSideBar = () => {
  const [activeButton, setActiveButton] = useState(() => {
    return localStorage.getItem('activeButton') || "cohort"; 
  });

  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className=''>
        <div className='max-md:px-20 gap-6 px-5 flex flex-col max-md:hidden max-sm:block'>
          <div className='flex gap-5'>
            <Link to={'/workspace/cohort'}>
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
            </Link>
          </div>

          <div className='flex gap-5'>
            <Link to={'/workspace/programs'}>
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
            </Link>
          </div>

          <div className='flex gap-5'> 
            <Link to={'/workspace/instructors'}>
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
            </Link>
          </div>

          <div className='flex gap-5'>
            <Link to={'/workspace/learner'}>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenSideBar;
