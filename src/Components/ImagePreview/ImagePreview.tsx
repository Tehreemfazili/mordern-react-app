import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import previewImage from '../../images/preview-image.png'
import './ImagePreview.scss'

export default function ImagePreview({file, setFile}) {

  function removeImage() {
     setFile('')
  }
 
  return (
    <div>
      <Box component={'image'} sx={{ display:'flex', margin: '52px auto', maxWidth: '400px', flexDirection: 'column'}}>
      { file ? <img src={file} className='preview-image'/> : <img src={previewImage} className='preview-image'/>}
      <Button onClick={removeImage}>Remove image</Button>
      </Box>
    </div>
  )
}
