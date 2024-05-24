export interface FormInputProps {
  id: string;
  name: string;
  control: any;
  label?: string;
  setValue?: any;
  errorValue?: any;
  errorMessage?: any;
  pattern? :any;
  validationErrorMessage?: any; 
  setEmail?: any;
  disabled?: any;
  email?: any;
}

export type EmailCheckboxProps = {
  id: string;
  name: string;
  control: any;
  label?: string;
  isChecked?: any;
  setIsChecked?: any
}

export type FormEmailProps = {
  id: string;
  name: string;
  control: any;
  label?: string;
  isChecked?: any;
  setIsChecked?: any
}