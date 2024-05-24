import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import React from 'react'
import { FormInputProps } from "../FormInputProps/FormInputProps.tsx";


export const InputFormField = ({ name, control, label, id, errorValue, errorMessage, pattern, validationErrorMessage, setEmail, disabled, email }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={setEmail ? (e) => setEmail(e.target.value) : onChange}
          value={email ? email : value}
          fullWidth
          id = {id}
          label={label}
          variant="outlined"
          sx={{ margin: '20px 0'}}
          disabled={disabled}
        />
      )}
      rules={{ required: { value: errorValue, message: errorMessage }, pattern: {value: pattern, message: validationErrorMessage}}}
      
    />
  );
};