import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function AlertDialog( {openAlertDialog, onAlertClose, retailer, onContinue}) {

  return (
    <Dialog
      open={openAlertDialog}
      onClose={onAlertClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Do you want to continue?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant='h6'>Name: {retailer.Name}</Typography>
          <Typography variant='h6'>Email: {retailer.Email}</Typography>
          <Typography variant='h6'>Address: {retailer.Address}</Typography>
          <Typography variant='h6'>Postal: {retailer.Postal}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAlertClose}>Discard</Button>
        <Button onClick={onContinue} autoFocus>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}