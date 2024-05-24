import { Button, TextField, Typography, useFormControl } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import './Retailer-form.scss';
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx';
import { FormDatePicker } from '../DatePicker/FormDatePicker.tsx';
import { RetailerFormInput } from './Retailer.tsx';
import { BASE_URL } from '../../Utils/BASE_URL.tsx';
import AlertDialog from '../Modals/Dialogs/AlertDialog.tsx';
import { BasicModal } from '../Modals/BasicModal/BasicModal.tsx';
import { EmailCheckbox } from '../Form/Checkbox/EmailCheckbox.tsx';
import { Link } from 'react-router-dom';

export default function RetailerForm() {
  const { register, handleSubmit,control, setValue, watch, formState: { errors } } = useForm<RetailerFormInput>();
  const [retailers, setRetailers] = useState<RetailerFormInput | null>();
  const [responseData, setResponseData] = useState<RetailerFormInput | null>();
  const [openAlertDialog, setOpenAlertDialog] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('')
  const [isChecked, setIsChecked] = useState(false);

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
      <InputFormField id="retailer-email" name= "Email" label="Email" control={control} errorValue={true} errorMessage={"Email is required"} pattern= {/^\S+@\S+$/i } validationErrorMessage = {"Please enter a valid email"} setEmail={setEmail}/>
      <div className='form-email-address'>
        {isChecked ? <InputFormField id="retailer-form-email" name= "Form-email" label="Form Email" control={control} email={email} disabled={true}/> : <InputFormField id="retailer-form-email" name= "Form-email" label="Form Email" control={control} errorValue={true} errorMessage={"Form Email is required"}/>}
        <EmailCheckbox id='confirm-form-email'  control={control} name={"checkboxValue"}  label='Same Email' setIsChecked={setIsChecked}/>
      </div>
      <InputFormField id="retailer-address" name= "Address" label="Name" control={control} errorValue={true} errorMessage={"Address is required"}/>
      <InputFormField id="retailer-postal" name= "Postal" label="Name" control={control} errorValue={true} errorMessage={"Postal is required"}/>
    
    <Button type="submit" >Add Retailer</Button>
    {openAlertDialog && <AlertDialog openAlertDialog={openAlertDialog} onAlertClose= {handleAlertDialogClose} retailer={retailers} onContinue={onContinue}/>}
    {responseData && <BasicModal openModal= {openModal} onModalClose = {handleModelClose}/>}
    <Link to='/retailers-list'>GET RETAILERS LIST</Link>
  </form>
  );
}