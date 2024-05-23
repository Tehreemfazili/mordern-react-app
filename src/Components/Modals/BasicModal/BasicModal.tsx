import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Check } from '@mui/icons-material';

export function BasicModal({ openModal, onModalClose}) {

  return (
    <Modal
      open={openModal}
      onClose={onModalClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description">
      <Box sx={{  position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3}}>
        <h2 id="child-modal-title">Text in a child modal</h2>
        <p id="child-modal-description">
          <Check/> Retailer Registered Successfully!
        </p>
        <Button onClick={onModalClose}>Close</Button>
      </Box>
    </Modal>
  );
}