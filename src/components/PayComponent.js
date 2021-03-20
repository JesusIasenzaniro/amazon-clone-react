import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import '../components/CSS/PayComponent.css';
import { Link } from 'react-router-dom';

const TypographyStyled = withStyles((theme) => ({
    root: {
        fontSize: '13px',
    },
}))(Typography);

const ButtonStyled = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        background: ' linear-gradient(to bottom, #FFE17D 0%, #FFD978 50%, #FFC376 100%);',
        border: '1px solid #493323',

        '&:hover': {
            background: 'linear-gradient(to bottom, #EAB165 0%, #FFA94D 50%, #E08934 100%);',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '9px',
        },
    },
}))(Button);
export const PayComponent = () => {
    return (
        <Grid container justify='center' className='container__pay'>
            <Grid>
                <CheckCircleIcon className='icon' style={{ color: 'green' }} />
            </Grid>
            <Grid>
                <TypographyStyled>
                    <span className='info'>
                        {' '}
                        ¡Bienvenido a Amazon! <span className='info__free'>Envío Gratis</span> en <br />
                        tu primer pedido{' '}
                    </span>
                    .Seleccione esta opción <br /> al finalizar la compra. <span className='info'>Ver detalles</span>
                </TypographyStyled>
            </Grid>
            <Grid>
                <div className=' total__price__pay-component'>
                    Subtotal(1 producto): <span className='number'>400€</span>
                </div>
            </Grid>
            <Grid container justify='center' className='container__gift__text'>
                <input type='checkbox' className='container__checkbox'></input> <TypographyStyled>Este pedido contine regalo</TypographyStyled>
            </Grid>
            <Grid>
                <Link to='/checkout' className='checkout__button'>
                    <ButtonStyled>Tramitar pedido</ButtonStyled>
                </Link>
            </Grid>
        </Grid>
    );
};
