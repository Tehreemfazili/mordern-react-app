import React from "react";
import DateFnsUtils from "@date-io/date-fns";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "../Form/FormInputProps/FormInputProps";

const DATE_FORMAT = "dd-MMM-yy";

export const FormDatePicker = ({ name, control, label, id }: FormInputProps) => {
  return (
    <LocalizationProvider>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <DatePicker
            fullWidth
            variant="inline"
            defaultValue={new Date()}
            id={`date-${Math.random()}`}
            label={label}
            rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
            refuse={/[^[a-zA-Z0-9-]*$]+/gi}
            autoOk
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            format={DATE_FORMAT}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  );
};