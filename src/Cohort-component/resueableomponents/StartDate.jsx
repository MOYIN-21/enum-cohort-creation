import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');
const theme = createTheme();

const useStyles = makeStyles((theme) => ({}));

const StartDate=({setStartDate})=> {

  const classes = useStyles();

  const [value, setValue] = useState(dayjs("DD MMM YYYY"));

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate)
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
              onChange={(newValue) => handleStartDateChange(newValue)}
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
export default StartDate;