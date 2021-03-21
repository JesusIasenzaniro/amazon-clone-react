import React from 'react';
import { Grid } from '@material-ui/core';
const Loading = () => {
    return (
        <Grid container justify='center' alignItems='center' className='container__loading'>
            <div className='loading'></div>
        </Grid>
    );
};

export default Loading;
