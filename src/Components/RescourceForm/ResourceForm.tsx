import React from 'react'
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form';

export default function ResourceForm() {
  const { register, handleSubmit,control, setValue, watch, formState: { errors } } = useForm();

  const onSubmit  = (data)  => {
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='resource-form'>
      <InputFormField id="resource-name" name= "Resource Name" label="Resource Name" control={control} errorValue={true} errorMessage={"Name is required"}/>
      <InputFormField id="resource-optional-description" name= "Optional description" label="Optional description" control={control} errorValue={true} errorMessage={"Email is required"} pattern= {/^\S+@\S+$/i } validationErrorMessage = {"Please enter a valid email"}/>     
      <InputFormField id="resource-series" name= "series" label="Series" control={control} errorValue={true} errorMessage={"Postal is required"}/>
    </form>
  )
}
