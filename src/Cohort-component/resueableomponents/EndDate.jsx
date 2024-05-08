import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux'; 
import { setDate } from '../../redox/createCohortData/DateSlice';

const EndDate = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-17')); 
  const dispatch = useDispatch();

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    dispatch(setDate(newDate.format('YYYY-MM-DD'))); 
  };
  console.log(selectedDate)

  return (
    <div className="pt-10">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="End Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />} 
        />
      </LocalizationProvider>
    </div>
  );
};

export default EndDate;
