import React from 'react'
import BlackoutsForm from '../../../Components/BlackoutsForm/BlackoutsForm.tsx'
import { Typography } from '@mui/material'
import ResourceForm from '../../../Components/RescourceForm/ResourceForm.tsx'
import Imagery from '../../../Components/Imagery/Imagery.tsx'
import AccordionComp from '../../../Components/Accordion/Accordion.tsx'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowDropDownCircle, Close } from '@mui/icons-material'

export default function ResourcesModal() {
  return (
    <div>
      <Typography variant='h3'>Name of the model</Typography>
      <Typography variant='h5'>This is the global resource profile. Changes to the below with reflect all the instances set to use this profile</Typography>
      <Typography variant='h4'>Description</Typography>
      <ResourceForm/>
      <AccordionComp>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownCircle />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           <div>
            <Typography variant='h4'>Blackouts</Typography>
            <Typography variant='h6'>Add a period where bookings are not availableEG bank holidays or early closure</Typography>
           </div>
          </AccordionSummary>
          <AccordionDetails>
            <BlackoutsForm/>
            <Close/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownCircle />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
             <Typography variant='h5'>Imagery</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Imagery/>
          </AccordionDetails>
        </Accordion>
      </AccordionComp>
    </div>
  )
}
