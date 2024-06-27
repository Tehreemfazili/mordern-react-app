import React from 'react'
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx'
import { Button, IconButton, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { Add } from '@mui/icons-material';
import FormDatePicker from '../DatePicker/FormDatePicker.tsx';
import './BlackoutsForm.scss'
import FormTimePicker from '../TimePicker/FormTimePicker.tsx';

export default function BlackoutsForm() {
  const { register, handleSubmit,control, setValue, watch, formState: { errors } } = useForm();



  const onSubmit  = (data)  => {
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='retailer-form'>
      <div className='blackout-detail-wrapper'>
        <div>
          <InputFormField id="retailer-name" name= "Name" label="Resource Name" control={control} errorValue={true} errorMessage={"Name is required"}/>
        </div>    
        <Typography variant='h5'>Dates</Typography>
        <div className='blackout-dates'>
          <FormDatePicker label={"From Date"}/>
          <FormDatePicker label={"To Date"}/>          
        </div>
        <div className='primary-btn-outlined'><Add/><Button type="submit">Add Date</Button></div>
        <Typography variant='h5'>Times (applies to all above)</Typography>
        <div className='blackout-time'>
          <FormTimePicker label={"Start"}/>
          <FormTimePicker label={"End"}/>
        </div>
      </div>
      <div className='add-blackout-btn primary-btn'>
        <Add/><Button type="submit"  >Add Blackout</Button>
      </div>
    </form>
  )
}
