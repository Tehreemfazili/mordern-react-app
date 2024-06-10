import React from 'react'
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx'
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function AddSource({setFile}) {

  const handleChange = (event) => {
    setFile(event.target.value);
  }

  return (
    <div>
      <TextField name='Source' label='Source' onChange={(e) => handleChange(e)}/>
    </div>
  )
}
