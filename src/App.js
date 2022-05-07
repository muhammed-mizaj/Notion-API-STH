import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import Main from './components/Main/Main';
import useStyles from '././styles';

const App = () => {
    const classes = useStyles();  
    const main = useRef(null);
    const executeScroll = () => main.current.scrollIntoView();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" jusitfy="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                </Grid>
                <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>  
                </Grid>
            </Grid>
        </div>
    )
}
export default App;
