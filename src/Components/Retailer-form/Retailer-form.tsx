import { TextField, Typography, useFormControl } from '@mui/material';
import React from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import './Retailer-form.scss';
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx';
import { FormCheckBox } from '../Form/Checkbox/FormCheckbox.tsx';

interface RetailerFormInput {
  name: string
  email: string
  address: string
  postal: string
  iceCreamType: { label: string; value: string }
}

export default function RetailerForm() {
  const { register, handleSubmit,control, setValue, watch, formState: { errors } } = useForm<RetailerFormInput>();

  const onSubmit: SubmitHandler<RetailerFormInput> = data => console.log(data);

  return  (
    <form onSubmit={handleSubmit(onSubmit)} className='retailer-form'>
      <Typography variant='h4'> Details</Typography>
      <InputFormField id="retailer-name" name= "Name" label="Name" control={control}/>
      <InputFormField id="retailer-email" name= "Email" label="Email" control={control}/>
      <div className='form-email-address'>
        <InputFormField id="retailer-form-email" name= "Form-email" label="Form Email" control={control}/>
        <FormCheckBox id='confirm-form-email'  control={control} setValue={setValue} name={"checkboxValue"} label={"Checkbox Input"} />
      </div>
      <InputFormField id="retailer-address" name= "Address" label="Name" control={control}/>
      <InputFormField id="retailer-postal" name= "Postal" label="Name" control={control}/>

      {/* <TextField id="retailer-email" label="email" variant="outlined" sx={{ margin: '20px 0'}}/>
      <TextField id="retailer-address" label="address" variant="outlined" sx={{ margin: '20px 0'}}/>
      <TextField id="retailer-postal" label="postal" variant="outlined" sx={{ margin: '20px 0'}}/>
      <TextField id="retailer-address" label="Name" variant="outlined" sx={{ margin: '20px 0'}}/> */}
    {/* register your input into the hook by invoking the "register" function */}
    {/* <input defaultValue="test" {...register("example")} /> */}
    
    {/* include validation with required or other standard HTML validation rules */}
    {/* <input {...register("exampleRequired", { required: true })} /> */}
    {/* errors will return when field validation fails  */}
    {/* {errors.exampleRequired && <span>This field is required</span>} */}
    
    <input type="submit" />
  </form>
  );
}