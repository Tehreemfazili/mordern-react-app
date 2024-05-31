import { Box } from '@mui/material';
import React, { useState } from 'react';
import previewImage from '../../images/preview-image.png'

export default function ImagePreview({file}) {
 
  return (
    <div>
      <Box component={'image'} sx={{ display:'flex', margin: '52px auto', maxWidth: '400px'}}>
      { file ? <img src={file} className='preview-image'/> : <img src={previewImage} className='preview-image'/>}
      </Box>
    </div>
  )
}
