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
import { setEndDate } from '../../redox/createCohortData/DateSlice';

dayjs.locale('en');
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
}));

const EndDate=({setEndDate,formData})=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = useState(dayjs('2024-05-27'));

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate)
  };

  return (
    <LocalizationProvider 
    dateAdapter={AdapterDayjs}>
      <div className={classes.container}>
        <div className=''>
          <label>End Date</label>
          <DemoContainer
            components={['DatePicker']}>
            <DatePicker
            disablePast
            value={value}
            onChange={(newValue)=>{ handleEndDateChange(newValue)}}
            className={classes.textField}
            renderInput={(params) => (
                <TextField {...params}
                variant="standard"  
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