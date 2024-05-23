import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import React from 'react'
import { FormInputProps } from "../FormInputProps/FormInputProps.tsx";


export const InputFormField = ({ name, control, label, id, errorValue, errorMessage, pattern, validationErrorMessage }: FormInputProps) => {
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
          onChange={onChange}
          value={value}
          fullWidth
          id = {id}
          label={label}
          variant="outlined"
          sx={{ margin: '20px 0'}}

        />
      )}
      rules={{ required: { value: errorValue, message: errorMessage }, pattern: {value: pattern, message: validationErrorMessage}}}
      
    />
  );
};