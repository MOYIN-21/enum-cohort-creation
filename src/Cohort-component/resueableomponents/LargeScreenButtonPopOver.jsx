import React, { useState } from 'react';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material'
import EndDate from './EndDate';
import LargeScreenDragAndDrop from './LargeScreenDragAndDrop';
import { useDispatch, useSelector } from 'react-redux';
import { setCohortName } from '../../redux/cohortCreation/Slice';
import { setSelectedOption } from '../../redux/cohortCreation/Slice';
import { setDescription } from '../../redux/cohortCreation/Slice';


const LargeScreenButtonPopOver=()=>{
  const dispatch = useDispatch();
  const [selectedOption, setSelected] = useState('');  
  const cohortInput = useSelector((state)=>state.cohort.cohortName);
  console.log(cohortInput)
  const description = useSelector((state)=> state.cohort.description);
  console.log(description)
  const [layout, setLayout] = useState('');

  const handelCancelButton =()=>{
    console.log("button")
    setLayout(false)
  }

  const handleSelectChange=(e)=> {
    setSelected(e.target.value);
    dispatch(setSelectedOption(e.target.value));
  }
  const isButtonDisabled = !setCohortName || !setDescription || !setSelectedOption;

  return (
    <div className='hidden sm:flex justify-center pt-10'>
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
            <ModalClose/>
            <DialogTitle 
              className="text-4xl font-serif" >Create a Cohort</DialogTitle>
            <DialogContent>

              <FormControl>

              <FormLabel className="pt-10">Cohort Name</FormLabel>
                <Textarea 
                  placeholder="Enter cohort Name" 
                  minRows={2}
                  onChange={(e) => dispatch(setCohortName(e.target.cohort.cohortName))}
                  />
              </FormControl>

              <FormControl className="pt-10">
                <FormLabel>Description</FormLabel>
                <Textarea 
                  placeholder="Ex. A space for python developers" 
                  minRows={2} 
                  onChange={(e)=> dispatch(setDescription(e.target.cohort.description))}
                  />
              </FormControl>

              <FormControl className="pt-10">
                <p className='flex justify-start'>Program</p>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value={"product"}>Product Design</MenuItem>
                      <MenuItem value={"backend"}>Backend</MenuItem>
                      <MenuItem value={"frontend"}>Frontend</MenuItem>
                      <MenuItem value={"management"}>Product Management</MenuItem>
                      <MenuItem value={"devops"}>DevOps</MenuItem>
                      <MenuItem value={"dataScience"}>Data Science</MenuItem>
                    </Select>
              </FormControl>

              <FormControl>
                <EndDate/>
              </FormControl>

              <FormControl className="pt-10">
                <p>Add a cohort Avater</p>
                <LargeScreenDragAndDrop/>
                <p className='flex justify-start'>you can do this later</p>
              </FormControl>

              <FormControl>
                <div className='flex justify-end gap-5'> 
                <div className='pt-10'>
                    <Button 
                      variant="outlined"
                      sx={{
                        lineHeight: '27px', 
                        width: 'full'   ,
                        color:  '#008EEF'   
                      }}
                        onClick={handelCancelButton}
                    >
                      Cancel
                    </Button>
                  </div>


                  <div className='pt-10'>
                    <Button 
                      variant="contained"
                      disabled={isButtonDisabled} 
                      sx={{
                        // backgroundColor: "#008EEF",
                        backgroundColor: isButtonDisabled ? "#008EEF" : "#BDBDBD", 
                        color: "#FFFFFF",
                        lineHeight: '27px', 
                        width: 'full',
                      }} 
                    >
                      Create Class
                    </Button>
                  </div>

                </div>
              </FormControl>
            </DialogContent>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </div>
  );
}
export default LargeScreenButtonPopOver