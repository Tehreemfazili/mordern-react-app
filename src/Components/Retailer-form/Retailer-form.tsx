import { Button, TextField, Typography, useFormControl } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import './Retailer-form.scss';
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx';
import { FormCheckBox } from '../Form/Checkbox/FormCheckbox.tsx';
import { FormDatePicker } from '../DatePicker/FormDatePicker.tsx';
import { RetailerFormInput } from './Retailer.tsx';
import { AddRetailer } from './AddRetailer.tsx';
import { BASE_URL } from '../../Utils/BASE_URL.tsx';
import AlertDialog from '../Modals/Dialogs/AlertDialog.tsx';
import { BasicModal } from '../Modals/BasicModal/BasicModal.tsx';



export default function RetailerForm() {
  const { register, handleSubmit,control, setValue, watch, formState: { errors } } = useForm<RetailerFormInput>();
  const [retailers, setRetailers] = useState<RetailerFormInput | null>();
  const [responseData, setResponseData] = useState<RetailerFormInput | null>();
  const [openAlertDialog, setOpenAlertDialog] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const onSubmit : SubmitHandler<RetailerFormInput> = (data : RetailerFormInput)  => {
    handleAlertDialogOpen()
    setRetailers(data)
  }

  const handleAlertDialogOpen = () => {
    setOpenAlertDialog(true);
  };

  const handleAlertDialogClose = () => {
    setOpenAlertDialog(false);
  };

  const handleModelOpen = () => {
    setOpenModal(true);
  };

  const handleModelClose = () => {
    setOpenModal(false);
  };

  const onContinue = async () => {
    try {
      await fetch(`${BASE_URL}/register-retailer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(retailers),
      })
        .then((res) => res.json())
        .then((reqData) => {
          setResponseData(reqData);
          setOpenAlertDialog(false)
          handleModelOpen()
        });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
    };
  }

  return  (
    <form onSubmit={handleSubmit(onSubmit)} className='retailer-form'>
      <Typography variant='h4'> Details</Typography>
      <InputFormField id="retailer-name" name= "Name" label="Name" control={control} errorValue={true} errorMessage={"Name is required"}/>
      <InputFormField id="retailer-email" name= "Email" label="Email" control={control} errorValue={true} errorMessage={"Email is required"} pattern= {/^\S+@\S+$/i } validationErrorMessage = {"Please enter a valid email"}/>
      <div className='form-email-address'>
        <InputFormField id="retailer-form-email" name= "Form-email" label="Form Email" control={control} errorValue={true} errorMessage={"Form Email is required"}/>
        <FormCheckBox id='confirm-form-email'  control={control} setValue={setValue} name={"checkboxValue"} label={"Checkbox Input"} />
      </div>
      <InputFormField id="retailer-address" name= "Address" label="Name" control={control} errorValue={true} errorMessage={"Address is required"}/>
      <InputFormField id="retailer-postal" name= "Postal" label="Name" control={control} errorValue={true} errorMessage={"Postal is required"}/>

      <Typography> Select Date</Typography>
      {/* <FormDatePicker id="date-picker" name= "Postal" label="Date" control={control}/> */}

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
    
    <Button type="submit" >Add Retailer</Button>
    {openAlertDialog && <AlertDialog openAlertDialog={openAlertDialog} onAlertClose= {handleAlertDialogClose} retailer={retailers} onContinue={onContinue}/>}
    {responseData && <BasicModal openModal= {openModal} onModalClose = {handleModelClose}/>}
  </form>
  );
}