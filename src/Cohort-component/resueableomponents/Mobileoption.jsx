import React, { useState } from 'react'
import { Button, FormControl, MenuItem } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { FiBriefcase } from "react-icons/fi";
// import Textarea from '@mui/joy/Textarea';
// import EndDate from './EndDate';

const Mobileoption = () => {
    const [activeButton, setActiveButton] = useState(""); 
    const handleClick = (value) => {
      setActiveButton(value);
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
      <div className='md:hidden block pt-12 px-5'>
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
        </div>
  )
}
export default Mobileoption