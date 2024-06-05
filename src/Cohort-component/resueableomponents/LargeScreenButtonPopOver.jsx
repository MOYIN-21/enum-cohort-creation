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
import { useDispatch } from 'react-redux';
import Programs from './Programs';
import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DragAndUploadFile from './DragAndUploadFile';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setProgram } from '../../redox/createCohortData/ProgramSlice';
import dayjs from 'dayjs';

const LargeScreenButtonPopOver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [layout, setLayout] = useState('');
  const [program, selectedProgram] = useState('');
  const [endDate, setEndDate] = useState(null);
  const [validate, setValidate] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDateDisabled, setEndDateDisabled] = useState(true);
  const [endDateError, setEndDateError] = useState('');
  const [formData, setFormData] = useState({
    cohortName: "",
    description: "",
    programDrop: program,
    startDate: "",
    endDate: "",
    fileUpload: "file",
  });

  const initialFormData = {
    cohortName: "",
    description: "",
    programDrop: "",
    startDate: "",
    endDate: "",
    fileUpload: "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setProgram(formData));
    setFormData(initialFormData);
    setStartDate(null);
    setEndDate(null);
    setLayout(false);
  };

  const handleDrop = (fileURL) => {
    setFileUpload(fileURL);
    setFormData((prevFormData) => ({
      ...prevFormData,
      uploadImage: fileURL,
    }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelCancelButton = () => {
    setLayout(false);
  };

  useEffect(() => {
    const isFormValid =
      formData.cohortName !== '' &&
      formData.description !== '' &&
      formData.programDrop !== '' &&
      formData.startDate !== '' &&
      formData.endDate !== '' &&
      formData.fileUpload !== ''
    setSubmitDisabled(!isFormValid);
  }, [formData]);

  const handleValidity = () => {
    if (formData.startDate === null) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  const handleStartDateChange = (date) => {
    const value = date.$d;
    const name = "startDate";
    setFormData({ ...formData, [name]: value });
    setStartDate(date);
    setEndDateDisabled(false);
    handleValidity();
    if (endDate && dayjs(date).isAfter(dayjs(endDate), 'day')) {
      setEndDate(null);
      setEndDateError("End date cannot be before start date");
    } else {
      setEndDateError("");
    }
  };

  const handleEndDateChange = (date) => {
    const value = date.$d;
    const name = "endDate";
    setFormData({ ...formData, [name]: value });
    setEndDate(date);
    if (startDate && (dayjs(date).isBefore(dayjs(formData.startDate), 'day') || dayjs(date).isSame(dayjs(formData.startDate), 'day'))) {
      setEndDateError("End date cannot be before or same as start date");
      return;
    }
    setEndDateError("");
  };

  return (
    <div className='hidden sm:flex justify-center'>
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
              onClick={() => {
                setLayout('center');
              }}
            >
              Create Cohort
            </Button>
          </div>
        </Stack>
        <Modal open={!!layout} onClose={() => setLayout('')}>
          <ModalDialog layout={layout}>
            <ModalClose />
            <DialogTitle className="text-4xl font-serif">Create a Cohort</DialogTitle>
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
                <Programs setProgram={handleChange} formData={formData} />
              </FormControl>

              <FormControl>
                <div className='flex mt-4 w-[80%] gap-4'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div>
                      <Typography variant="h6" className="d text-xl font-semibold">Start Date</Typography>
                      <DatePicker
                        value={startDate}
                        disablePast
                        onChange={handleStartDateChange}
                      />
                    </div>
                    <div>
                      <Typography variant="h6" className="d text-xl font-semibold">End Date</Typography>
                      <DatePicker
                        value={endDate}
                        onChange={handleEndDateChange}
                        minDate={startDate}
                        disabled={endDateDisabled}
                        shouldDisableDate={(date) => startDate && dayjs(date).isSame(startDate, 'day')}
                      />
                      {endDateError && (
                        <Typography color="error" style={{ fontSize: "1rem" }}>
                          {endDateError}
                        </Typography>
                      )}
                    </div>
                  </LocalizationProvider>
                </div>
              </FormControl>

              <FormControl className="pt-10">
                <p>Add a cohort Avatar</p>
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
                        width: 'full',
                        color: '#008EEF'
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

export default LargeScreenButtonPopOver;
