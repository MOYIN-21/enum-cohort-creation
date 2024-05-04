import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EndDate=()=> {
  const [endDate, setEndDate] = React.useState(dayjs('2022-04-17'));

  return (
    <div className='pt-10'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker label="end Date" defaultValue={dayjs('2022-04-17')} />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
export default EndDate
