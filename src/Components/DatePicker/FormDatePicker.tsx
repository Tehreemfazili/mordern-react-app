import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function FormDatePicker({label}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <DatePicker defaultValue={dayjs(new Date())} label={label} format="MMM DD, YYYY" slotProps={{ textField: { variant: 'standard', } }} />
      </DemoContainer>
    </LocalizationProvider>
  );
}