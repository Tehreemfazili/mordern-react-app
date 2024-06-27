import { Typography } from '@mui/material'
import React from 'react'
import FilterComponent from '../FilterComponent/FilterComponent.tsx'

export default function Instances() {
  return (
    <div className='model-instances'>
      <div className='model-instances-description'>
        <Typography variant='h5'>Resources Instances</Typography>
        <Typography variant='h6'>Edit variants of thisresources per retailer instances</Typography>
      </div>
      <div className='model-instances-filter'>
        <FilterComponent/>
      </div>
      <div className='model-instances-list'></div>
    </div>
  )
}
