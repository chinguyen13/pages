import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

type Props = {
  open: boolean,
  message: string,
  handleClose: any
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
){
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>
});

const SnackbarSuccess = (props: Props) => {
  return(
    <Snackbar 
      open={props.open}
      onClose={props.handleClose}
      message={props.message}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      autoHideDuration={4000}
    >
      <Alert severity="success">{props.message}</Alert>
    </Snackbar>
  );
}

export default SnackbarSuccess;