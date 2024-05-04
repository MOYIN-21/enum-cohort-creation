import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StartDate=()=> {
  const [startDate, setStartDate] = React.useState(dayjs('2022-04-17'));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
        label="start Date"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
         />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default StartDate