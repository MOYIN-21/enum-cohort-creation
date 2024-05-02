import * as React from 'react';
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


const LargeScreenButtonPopOver=()=>{
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const [open, setOpen] = React.useState(false)

  const [layout, setLayout] = React.useState(undefined);
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
            <DialogTitle className="text-4xl font-serif" >Create a Cohort</DialogTitle>
            <DialogContent>

              <FormControl>

              <FormLabel className="pt-10">Cohort Name</FormLabel>
                <Textarea placeholder="Enter cohort Name" minRows={2} />
              </FormControl>

              <FormControl className="pt-10">
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="Ex. A space for python developers" minRows={2} />
              </FormControl>

              <FormControl className="pt-10">
                <p className='flex justify-start'>Program</p>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Program"
                      onChange={handleChange}
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
                      onClick={()=> {
                        setLayout('center')
                      }}                    
                    >
                      Cancel
                    </Button>
                  </div>


                  <div className='pt-10'>
                    <Button 
                      variant="contained"
                      sx={{
                        backgroundColor: "#008EEF",
                        color: "#FFFFFF",
                        lineHeight: '27px', 
                        width: 'full'   ,
                      }} 
                      onClick={()=> {
                        setLayout('center')
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