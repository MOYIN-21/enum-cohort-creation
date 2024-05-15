import React, { useState, useEffect } from 'react';
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
import DragAndUploadFile from './DragAndUploadFile';
import StartDate from './StartDate';
import { useNavigate } from 'react-router-dom';
import { setProgram } from '../../redox/createCohortData/ProgramSlice';

const LargeScreenButtonPopOver=()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [layout, setLayout] = useState('');
  const [program, selectedProgram] = useState('');
  const [endDate,setEndDate] = useState(null)
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [fileUpload, setFileUpload] = useState('');
  const [formData, setFormData] = useState({
    cohortName: "",
    description: "",
    programDrop: program,
    startDate:"",
    endDate:"",
    uploadImage: "fileUpload",
  })
  
  const handleSubmit=(event)=>{
      event.preventDefault();
      dispatch(setProgram(formData))
      navigate('/cohortcreated')
  }
  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setImageURL(URL.createObjectURL(file));
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    if( name !== "programDrop"){
    setFormData({ ...formData, [name]: value });}
    else{
      setFormData({...formData, [name]: value})
    }
  };


  const handleDate =(event)=>{
    const value = event.$d
    const name = "endDate"
    setFormData({...formData, [name]: value})
  }

  const handleStartDate =(event)=>{
    const value = event.$d
    const name = "startDate"
    setFormData({...formData, [name]: value})
  }

  const handelCancelButton =()=>{
    setLayout(false)
  }
  console.log(formData," but i am disabled")

  useEffect(() => {
    const isFormValid =
    formData.cohortName !== '' && formData.description !== '' && formData.programDrop !== '' && formData.startDate !== '' && formData.endDate !== '' && formData.uploadImage !== '';
    setSubmitDisabled(!isFormValid);
  }, [formData]);
  
  return (
    <div className='hidden sm:flex justify-center '>
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
        <Modal open={!!layout} onClose={() => setLayout('')}>
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
               <Programs setProgram={handleChange} formData={formData}/>
              </FormControl>
             
                <FormControl>
                  <div  className="flex flex-row pt-10 gap-10">
                    <StartDate setStartDate={handleStartDate} formData={formData}/>
                    <EndDate setEndDate={handleDate} formData={formData}/>
                  </div>
                </FormControl>
              
              <FormControl className="pt-10">
                <p>Add a cohort Avater</p>
                <DragAndUploadFile setFileUpload={handleDrop} formData={formData} />
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
                      sx={{
                        // backgroundColor: "#008EEF",
                        backgroundColor: !submitDisabled ? "#008EEF" : "#BDBDBD", 
                        color: "#FFFFFF",
                        lineHeight: '27px', 
                        width: 'full',
                      }} 
                      type={'submit'}
                      disabled={submitDisabled}
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