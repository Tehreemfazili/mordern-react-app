import React from 'react'
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx'
import { useForm } from 'react-hook-form';

export default function AddSource() {
  const { handleSubmit,control, formState: { errors } } = useForm();

  return (
    <div>
      <InputFormField id="add-source" name= "Source" label="Source" control={control} errorValue={true} errorMessage={"Name is required"}/>

    </div>
  )
}
