import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { EmailCheckboxProps } from "../FormInputProps/FormInputProps";
import { FormControl, FormLabel, Checkbox, FormControlLabel } from "@mui/material";

export const EmailCheckbox: React.FC<EmailCheckboxProps> = ({ name, control, label, isChecked, setIsChecked }) => {

  const props = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleSelect = (value: any) => {
    setIsChecked(value)
  };

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend"/>
        <FormControlLabel
          control={
            <Controller
              name={name}
              render={({}) => {
                return (
                  <Checkbox
                    {...props}
                    checked={isChecked}
                    onChange={(e) => handleSelect(e.target.checked)}
                  />
                );
              }}
              control={control}
            />
          }
          label={label}
        />
    </FormControl>
  );
};