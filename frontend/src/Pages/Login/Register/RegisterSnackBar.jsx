import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ Button, Severity }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  let condition;
  let message;
  if (Severity === 'Email Already Exist') {
    condition = 'warning';
    message = 'Email Already Exist';
  } else if (Severity === 'Account Successfully Created') {
    condition = 'success';
    message = 'Account Successfully Created';
  } else {
    condition = 'error';
    message = 'Please Check Your Information';
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <div onClick={handleClick}>{Button}</div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={condition}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert> */}
      {/* {Severity === 'Email Already Exist' && (
        <Alert severity="warning">This is a warning message!</Alert>
      )} */}
      {/* <Alert severity="info">This is an information message!</Alert> */}
      {/* {Severity === 'Account Successfully Created' && (
        <Alert severity="success">This is a success message!</Alert>
      )} */}
    </Stack>
  );
}
