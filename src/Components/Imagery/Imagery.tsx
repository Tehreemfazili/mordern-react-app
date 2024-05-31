import { FormControlLabel, Radio, TextField, Typography } from '@mui/material'
import React from 'react'
import RadioButtonsGroup from '../RadioGroup/RadioGroup.tsx'
import UploadSource from '../UploadSource/UploadSource.tsx';
import AddSource from '../AddSource/AddSource.tsx';
import ImagePreview from '../ImagePreview/ImagePreview.tsx';
import { InputFormField } from '../Form/InputFormField/InputFormField.tsx';

export default function Imagery() {
  const [value, setValue] = React.useState('Upload');
  const [file, setFile] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(value)
  };

  return (
    <div className='imagery-wrapper'>
      <Typography variant='h5'>Imagery</Typography>
      <div className='imagery-wrapper-content'>
        <div>
          <RadioButtonsGroup label={'Image source content'} handleChange={handleChange} value={value}>
            <FormControlLabel value="Upload" control={<Radio />} label="Upload" />
            <FormControlLabel value="Add Source URL" control={<Radio />} label="Add Source URL" />
          </RadioButtonsGroup>
        </div>
        {value === 'Upload' ? <UploadSource setFile={setFile}/> :  <AddSource/>}
        <ImagePreview file={file}/>  
        <TextField id='alt-text' name='Alt Text' label='Alt Text' size="small" variant="outlined"sx={{ margin: '20px 0', width: '100%'}}
          />
      </div>
    </div>
  )
}
