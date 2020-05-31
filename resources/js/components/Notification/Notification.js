import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import EventEmmiter from '../../services/eventEmiiter'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

function Notification( props ) {
    
    const classes = useStyles();

    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('success'); // status will have 3 types ['info','error','success'];

    const eventEmmiter = new EventEmmiter();
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setShow(false);
      };
    // this.eventEmmiter.subscribe( ...propsEvent );

    eventEmmiter.subscribe('showNotification', ( notification ) => {
        console.log('notification : ', notification);
        setMessage( notification.message );
        setShow( true );
        setStatus( notification.status.toLowerCase() );
    })

    return (
        <div className={classes.root}>
        <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={status}>
                {message}
            </Alert>
        </Snackbar>
        </div>)
        // {/* // <Alert severity={status}> { message } </Alert> */});

}

export default Notification;