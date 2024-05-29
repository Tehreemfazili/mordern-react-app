import React from 'react'
import BlackoutsForm from '../../../Components/BlackoutsForm/BlackoutsForm.tsx'
import { Typography } from '@mui/material'
import ResourceForm from '../../../Components/RescourceForm/ResourceForm.tsx'

export default function ResourcesModal() {
  return (
    <div>
      <Typography variant='h3'>Name of the model</Typography>
      <Typography variant='h5'>This is the global resource profile. Changes to the below with reflect all the instances set to use this profile</Typography>
      <Typography variant='h4'>Description</Typography>
      <ResourceForm/>
      <BlackoutsForm/>
    </div>
  )
}
