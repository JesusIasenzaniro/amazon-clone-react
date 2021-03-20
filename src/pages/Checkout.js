import React from 'react';
import StripeCheckout from '../components/StripeCheckout';
import { useCartContext } from '../context/CartContext';
import Grid from '@material-ui/core/Grid';
import '../components/CSS/Checkout.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ButtonStyled = withStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        fontSize: '12px',
        margin: '1px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);

const Checkout = () => {
    const { cart } = useCartContext();
    return (
        <div>
            {cart.length < 1 ? (
                <Grid container direction='column' justify='center' alignItems='center' className='checkout__page__empty'>
                    <div>
                        <h2>You cart is empty</h2>
                    </div>
                    <div className='container__button__checkout'>
                        <Link to='/' className='link__checkout'>
                            <ButtonStyled>Go to home</ButtonStyled>
                        </Link>
                    </div>
                </Grid>
            ) : (
                <Grid container justify='center' alignItems='center' className='container__stripe__checkout'>
                    <StripeCheckout />
                </Grid>
            )}
        </div>
    );
};

export default Checkout;
