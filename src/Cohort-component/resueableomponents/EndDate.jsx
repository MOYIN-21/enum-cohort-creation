import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import { useDispatch } from 'react-redux';
import { setEndDate, setStartDate } from '../../redox/createCohortData/DateSlice';

dayjs.locale('en');
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  textField: {
    fontSize:"20px", 
  },
}));

const EndDate=()=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedEndDate, setSelectedEndDate] = useState(dayjs('2022-04-17'));
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs('2022-04-17'));

  const handleEndDateChange = (newDate) => {
    setSelectedEndDate(newDate);
    dispatch(setEndDate(newDate.format('YYYY-MM-DD')))
    console.log(selectedEndDate)
  };

  const handleStartDateChange = (newDate) => {
    console.log(newDate);
    setSelectedStartDate(newDate);
    dispatch(setStartDate(newDate.format('YYYY-MM-DD')))
    // console.log(selectedStartDate)
  }


  return (
    <LocalizationProvider 
    dateAdapter={AdapterDayjs}>
      <div className={classes.container}>
        <div>
          <label>Start Date</label>
          <DemoContainer 
          components={['DatePicker']}>
            <DatePicker
              disablePast
              renderInput={(params) => (
                <TextField {...params} 
                variant="standard" 
                label="Start Date" 
                value={selectedStartDate}
                onChange={handleStartDateChange}
                className={classes.textField} 
                />
              )}
              format="DD MMM YYYY" 
            />
          </DemoContainer>
        </div>
        <div className='pl-5'>
          <label>End Date</label>
          <DemoContainer 
          components={['DatePicker']}>
            <DatePicker
              disablePast
              renderInput={(params) => (
                <TextField {...params} 
                variant="standard" 
                label="End Date" 
                value={selectedEndDate}
                onChange={handleEndDateChange}
                className={classes.textField} 
              /> 
              )}
              format="DD MMM YYYY" 
            />
          </DemoContainer>
        </div>
      </div>
    </LocalizationProvider>
  );
}
export default EndDate;