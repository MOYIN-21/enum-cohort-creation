import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField'; 
import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    paddingBottom: theme.spacing()
  },
  textField: {
    fontSize:"20px", 
  },
}));

const EndDate=()=> {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.container}>
        <div>
          <label>Start Date</label>
          <DemoContainer components={['DatePicker']} sx={{width:"200px",height:"60px",paddingRight:"25px"}}>
            <DatePicker
              disablePast
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Start Date" className={classes.textField} /> // Apply custom style
              )}
              format="DD MMM YYYY" 
            />
          </DemoContainer>
        </div>
        <div className='pl-5'>
          <label>End Date</label>
          <DemoContainer components={['DatePicker']} sx={{width:"200px"}}>
            <DatePicker
              disablePast
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="End Date" className={classes.textField} /> // Apply custom style
              )}
              format="DD MMM YYYY" 
            />
          </DemoContainer>
        </div>
      </div>
    </LocalizationProvider>
  );
}
export default EndDate


// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { useDispatch } from 'react-redux'; 
// import { setDate } from '../../redox/createCohortData/DateSlice';

// const EndDate = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-17')); 
//   const dispatch = useDispatch();

//   const handleDateChange = (newDate) => {
//     setSelectedDate(newDate);
//     dispatch(setDate(newDate.format('YYYY-MM-DD'))); 
//   };
//   console.log(selectedDate)

//   return (
//     <div className="pt-10">
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="End Date"
//           value={selectedDate}
//           onChange={handleDateChange}
//           renderInput={(params) => <TextField {...params} />} 
//         />
//       </LocalizationProvider>
//     </div>
//   );
// };

// export default EndDate;
