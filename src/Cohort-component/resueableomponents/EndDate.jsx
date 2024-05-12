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
  container: {
    // display: 'flex',
  },
  // textField: {
  //   fontSize:"20px", 
  // },
}));

const EndDate=({setEndDate})=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedEndDate, setSelectedEndDate] = useState(dayjs(''));

  const handleEndDateChange = (newDate) => {
    console.log(newDate)
    // setEndDate(newDate)
    setSelectedEndDate(newDate);
    

    // dispatch(setEndDate(newDate.format('YYYY-MM-DD')))
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
            value={selectedEndDate}
            onChange={(event)=>{handleEndDateChange(event)}}
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