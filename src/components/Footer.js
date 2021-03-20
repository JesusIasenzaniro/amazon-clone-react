import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import '../components/CSS/footer.css';

const TypographyStyled = withStyles(() => ({
    root: {
        fontSize: '11px',
        color: 'white',
    },
}))(Typography);

export const Footer = () => {
    const returnToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Grid className='container__footer'>
            <div>
                <button onClick={returnToTop}>Return to the top</button>
            </div>
            <div className='inner-container' style={{ backgroundColor: 'rgb(31, 69, 87)' }}>
                <Divider />
            </div>
            <Grid container alignItems='center' style={{ backgroundColor: '#030c1bf6' }} className='container__use__terms'>
                <Container maxWidth='md'>
                    <Grid container justify='center' className='copyright'>
                        <TypographyStyled> © 1996-2020, AmazonExpress.com, Inc. o afiliados. Todos los derechos reservados.</TypographyStyled>
                    </Grid>
                    {/* </Grid> */}
                </Container>
            </Grid>
        </Grid>
    );
};
