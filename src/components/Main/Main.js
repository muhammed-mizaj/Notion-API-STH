import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';



function Main() {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="StdAyyo.h" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance Rs{balance}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            
        </Card>
    )
}

export default Main
