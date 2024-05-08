import React, { useState } from 'react'
import { FormControl, MenuItem } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { FiBriefcase } from "react-icons/fi";
import Textarea from '@mui/joy/Textarea';
import EndDate from './EndDate';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent'
import MobileDrapAndDrop from './MobileDrapAndDrop';

const MobilePopOver=()=>{
  const [activeButton, setActiveButton] = useState(""); 
    const handleClick = (value) => {
      setActiveButton(value);
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  const [layout, setLayout] = useState('');
  const handelCancelButton =()=>{
    console.log("button")
    setLayout(false)
  }
  return (
    
    <div className='md:hidden flex justify-center pt-10'>
      <React.Fragment>
        <Stack direction="row" spacing={1}>
          <div className='flex justify-center'>
            <Button 
              variant="contained"
              sx={{
                backgroundColor: "#008EEF",
                color: "#FFFFFF",
                lineHeight: '27px'            
              }}
              onClick={()=> {
                setLayout('center')
              }}
            >
              Create Cohort
            </Button>
          </div>
        </Stack>
        <Modal open={!!layout} onClose={() => setLayout(undefined)}>
          <ModalDialog layout={layout}>
            <DialogContent>
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
              
              <div className='pt-10'>
                <div className=''>
                  <p className='flex justify-start text-3xl font- font-serif '>Create Cohort</p>
                </div>
                    
                <div className='pt-10'>
                  <div>
                    <p className='flex justify-start'>Cohort Name</p>
                      <Box sx={{ display: 'flex',
                       gap: 2, 
                       alignItems: 'center', 
                       flexWrap: 'wrap',
                       display: 'grid',
                       py: 2
                       }}
                       >
                        <Textarea size="lg" name="Size" placeholder="Enter Class Name" />
                      </Box>
                  </div>

                  <div>
                    <p className='flex justify-start'>Description</p>
                      <Box sx={{
                       gap: 2, 
                       alignItems: 'center', 
                       flexWrap: 'wrap',
                       display: 'grid',
                       py: 2,
                       height: '72px' 
                       }}
                       >
                        <Textarea size="lg" name="Size"/>
                      </Box>
                  </div>

                  <div>
                    <EndDate/>
                  </div>

                  <div className='pt-10'>
                    <p className='flex justify-start'>Program</p>
                      <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Program"
                          onChange={handleChange}
                          sx={{
                          display: 'grid',
                          }}
                        >
                          <MenuItem value={"product"}>Product Design</MenuItem>
                          <MenuItem value={"backend"}>Backend</MenuItem>
                          <MenuItem value={"frontend"}>Frontend</MenuItem>
                          <MenuItem value={"management"}>Product Management</MenuItem>
                          <MenuItem value={"devops"}>DevOps</MenuItem>
                          <MenuItem value={"dataScience"}>Data Science</MenuItem>
                        </Select>
                  </div>

                  <div  className="pt-10">
                    <p>Add a cohort Avater</p>
                    <MobileDrapAndDrop/>
                    <p className='flex justify-start'>you can do this later</p>
                  </div>

                  <div className='pt-10 grid'>
                    <Button 
                      variant="contained"
                      sx={{
                        backgroundColor: "#008EEF",
                        color: "#FFFFFF",
                        lineHeight: '27px', 
                        width: 'full'       
                      }}
                      onClick={()=> {
                        setLayout('center')
                      }}
                    >
                      Create Class
                    </Button>
                  </div>

                  <div className='pt-4 grid'>
                    <Button 
                      variant="outlined"
                      sx={{
                        color: "#FFFFFF",
                        lineHeight: '27px', 
                        width: 'full'   ,
                        color:  '#008EEF'   
                      }}
                      onClick={()=> {
                        setLayout('center')
                      }}
                      onClick={handelCancelButton}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>

              </div>
            </FormControl>
          </Box>
            </DialogContent>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </div>
  );
}
export default MobilePopOver



























// import React, { useState } from 'react'
// import { Button, FormControl, MenuItem } from '@mui/material'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
// import GroupIcon from '@mui/icons-material/Group';
// import PersonIcon from '@mui/icons-material/Person';
// import { FiBriefcase } from "react-icons/fi";
// import Textarea from '@mui/joy/Textarea';
// import EndDate from './EndDate';

// const MobileButtonPopOver = () => {
//     const [activeButton, setActiveButton] = useState(""); 
//     const handleClick = (value) => {
//       setActiveButton(value);
//     };
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//         setAge(event.target.value);
//       };
//   return (
//       <div className='md:hidden block pt-12 px-5'>





//           <p className='justify-start flex'>Switch between tabs</p>
//           <Box sx={{ display: 300 }}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">Switch</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={age}
//                 label="Age"
//                 onChange={handleChange}
//                 sx={{
//                   '& .MuiMenuItem-root': {
//                     fontWeight: 'bold',
//                     color: 'orange',
//                   },
//                 }}
//                >
//               <MenuItem value={10}>
//                 <div className='flex gap-5'> 
//                   <Button 
//                     variant="text" 
//                     sx={{ 
//                       textTransform: 'none',
//                       color: activeButton === 2 ? '#008EEF' : 'black', 
//                       '&:hover': { 
//                           backgroundColor: '#F6FCFF',
//                           color: '#008EEF'
//                       },
//                       fontSize: 16,
//                       lineHeight: '27px' 
//                     }}
//                     // onClick={() => handleClick("cohorts")}  
//                     startIcon={<GroupIcon/>}
//                   >
//                     Cohorts
//                   </Button>
//                 </div>
//               </MenuItem>

//               <MenuItem value={20}>
//                 <div className='flex gap-5'> 
//                   <Button 
//                     variant="text" 
//                     sx={{ 
//                       textTransform: 'none',
//                       color: activeButton === 2 ? '#008EEF' : 'black', 
//                       '&:hover': { 
//                           backgroundColor: '#F6FCFF',
//                           color: '#008EEF'
//                       },
//                       fontSize: 16,
//                       lineHeight: '27px' 
//                     }}
//                     // onClick={() => handleClick(programs)}  
//                     startIcon={<ImportContactsTwoToneIcon/>}
//                   >
//                     Programs
//                   </Button>
//                 </div>
//               </MenuItem>

//               <MenuItem value={30}>
//                 <div className='flex gap-5'> 
//                   <Button 
//                     variant="text" 
//                     sx={{ 
//                       textTransform: 'none',
//                       color: activeButton === 2 ? '#008EEF' : 'black', 
//                       '&:hover': { 
//                           backgroundColor: '#F6FCFF',
//                           color: '#008EEF'
//                       },
//                       fontSize: 16,
//                       lineHeight: '27px'
//                     }}
//                     // onClick={() => handleClick(instructors)}  
//                     startIcon={<FiBriefcase />}
//                   >
//                     Instructors
//                   </Button>
//                 </div>
//               </MenuItem>

//               <MenuItem value={40}>
//                 <div className='flex gap-5'> 
//                   <Button 
//                     variant="text" 
//                     sx={{ 
//                       textTransform: 'none',
//                       color: activeButton === 3 ? '#008EEF' : 'black', 
//                       '&:hover': { 
//                           textDecoration: 'none',
//                           backgroundColor: '#F6FCFF',
//                           color: '#008EEF'
//                       },
//                       fontSize: 16,
//                       lineHeight: '27px'
//                     }}
//                     // onClick={() => handleClick(learners)}  
//                     startIcon={<PersonIcon />}
//                   >
//                     Learners
//                   </Button>
//                 </div>
//               </MenuItem>
//               </Select>
              
//               <div className='pt-10'>
//                 <div className=''>
//                   <p className='flex justify-start text-5xl font- font-serif '>Create Cohort</p>
//                 </div>
                    
//                 <div className='pt-10'>
//                   <div>
//                     <p className='flex justify-start'>Cohort Name</p>
//                       <Box sx={{ display: 'flex',
//                        gap: 2, 
//                        alignItems: 'center', 
//                        flexWrap: 'wrap',
//                        display: 'grid',
//                        py: 3
//                        }}
//                        >
//                         <Textarea size="lg" name="Size" placeholder="Enter Class Name" />
//                       </Box>
//                   </div>

//                   <div>
//                     <p className='flex justify-start'>Description</p>
//                       <Box sx={{ display: 'flex',
//                        gap: 2, 
//                        alignItems: 'center', 
//                        flexWrap: 'wrap',
//                        display: 'grid',
//                        py: 3,
//                        height: '72px' 
//                        }}
//                        >
//                         <Textarea size="lg" name="Size"/>
//                       </Box>
//                   </div>

//                   <div>
//                     <EndDate/>
//                   </div>
//                   <div>
//                     <p className='flex justify-start'>Program</p>
//                       <InputLabel id="demo-simple-select-label"></InputLabel>
//                         <Select
//                           labelId="demo-simple-select-label"
//                           id="demo-simple-select"
//                         //   className='justify-start'
//                           value={age}
//                           label="Program"
//                           onChange={handleChange}
//                           sx={{
                          
//                           display: 'grid',
//                           }}
//                         >
//                           <MenuItem value={"product"}>Product Design</MenuItem>
//                           <MenuItem value={"backend"}>Backend</MenuItem>
//                           <MenuItem value={"frontend"}>Frontend</MenuItem>
//                           <MenuItem value={"management"}>Product Management</MenuItem>
//                           <MenuItem value={"devops"}>DevOps</MenuItem>
//                           <MenuItem value={"dataScience"}>Data Science</MenuItem>
//                         </Select>
//                   </div>
                  
//                 </div>

//               </div>
//             </FormControl>
//           </Box>
//         </div>
//   )
// }
// export default MobileButtonPopOver