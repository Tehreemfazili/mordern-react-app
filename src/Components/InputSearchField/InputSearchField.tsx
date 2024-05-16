// import { Input } from '@mui/material';
import React from 'react';

// const InputSearchField = () => {
//   return (
//     <Input aria-label="Demo input" placeholder="Type something…" />
//   );
// }

// export default InputSearchField;

import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { blue, grey } from '../../CustomTheme/Colors/colors.tsx';

const Input = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function InputSearchField() {
  return <Input aria-label="Demo input" placeholder="Type something…" />;
}



const InputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.primary.main};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);