import React, { useState } from 'react'
import { Button } from '@mui/material'
import { FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

const Footer = () => {
  const [activeButton, setActiveButton] = useState(""); 

    const handleClick = (value) => {
      setActiveButton(value);
    };
  return (
    <div className='sm:hidden block pt-52'>
      <div className='flex flex-row justify-evenly'>
        <div className=''>
          <Link to="/homepage">
            <Button 
                className='flex flex-col'
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
                onClick={() => handleClick("Home")}  
                startIcon={<HomeOutlinedIcon/>}
              >
                Home
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/organization"> 
            <Button 
                className='flex flex-col'
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
                onClick={() => handleClick("Home")}  
                startIcon={<FiBriefcase/>}
              >
                Workspace
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/resourceslibrarypage"> 
            <Button 
              className='flex flex-col'
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
              onClick={() => handleClick("Home")}  
              startIcon={<ImportContactsTwoToneIcon/>}
            >
              Resources
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/schedule"> 
            <Button 
              className='flex flex-col'
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
              onClick={() => handleClick("Home")}  
              startIcon={<CalendarTodayOutlinedIcon/>}
            >
              Schedule
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer