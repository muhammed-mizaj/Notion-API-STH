import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import useStyles from './styles';

const CusomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles();
    
    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
               
            </Snackbar>
        </div>
    )
}

export default CusomizedSnackbar;
