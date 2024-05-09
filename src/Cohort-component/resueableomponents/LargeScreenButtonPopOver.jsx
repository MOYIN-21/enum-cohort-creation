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
import EndDate from './EndDate';
import { useDispatch } from 'react-redux';
import Programs from './Programs';
import { setCohortDescription, setCohortName } from '../../redox/createCohortData/Input';
import DragAndUploadFile from './DragAndUploadFile';

const LargeScreenButtonPopOver=()=>{
  const dispatch = useDispatch();
  const [layout, setLayout] = useState('');
  const [formData, setFormData] = useState({
    cohortName: "",
    description: "",
  })

  const handleSubmit=(event)=>{
      event.preventDefault();
  }
  console.log(formData);

  dispatch(setCohortName(formData.cohortName));
  dispatch(setCohortDescription(formData.description))

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelCancelButton =()=>{
    console.log("button")
    setLayout(false)
  }


  // const isButtonDisabled = !setCohortName || !setCohortDescription || !setSelectedOption;

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
              className="text-4xl font-serif">Create a Cohort</DialogTitle>
            <DialogContent onSubmit={handleSubmit}>

              <FormControl>

              <FormLabel className="pt-10">Cohort Name</FormLabel>
                <Textarea 
                  placeholder="Enter cohort Name" 
                  minRows={2}
                  name='cohortName'
                  value={formData.cohortName}
                  onChange={handleChange}
                  />
              </FormControl>

              <FormControl className="pt-10">
                <FormLabel>Description</FormLabel>
                <Textarea 
                  placeholder="Ex. A space for python developers" 
                  minRows={2} 
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  
                  />
              </FormControl>

              <FormControl>
               <Programs func={(pro)=>{Programs(pro)}}/>
              </FormControl>

              <div  className="flex flex-row pt-10">
                <FormControl className="">
                  <EndDate/>
                  {/* <EndDate/> */}
                </FormControl>
              </div>

              <FormControl className="pt-10">
                <p>Add a cohort Avater</p>
                <DragAndUploadFile/>
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
                      // disabled={isButtonDisabled} 
                      sx={{
                        backgroundColor: "#008EEF",
                        // backgroundColor: isButtonDisabled ? "#008EEF" : "#BDBDBD", 
                        color: "#FFFFFF",
                        lineHeight: '27px', 
                        width: 'full',
                      }} 
                      type={'submit'}
                      onClick={handleSubmit}
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