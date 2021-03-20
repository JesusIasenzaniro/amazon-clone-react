import React from 'react';
import './CSS/Error.css';
import { Grid } from '@material-ui/core';
const Error = () => {
    return (
        <Grid container justify='center' alignItems='center' className='container__error'>
            <h2>there was an error...</h2>
        </Grid>
    );
};

export default Error;
