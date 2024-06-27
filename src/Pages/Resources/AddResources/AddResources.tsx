import { Typography } from '@mui/material'
import React from 'react'
import BasicTabs from '../../../Components/BasicTabs/BasicTabs.tsx'

export default function AddResources() {
  return (
    <div className='models-wrapper'>
      <Typography variant='h5'>Models</Typography>
      <div>
        <BasicTabs />
      </div>
    </div>
  )
}
