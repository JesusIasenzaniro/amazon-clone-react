import React from 'react';
import { Cart } from '../components/Cart';
import { Grid } from '@material-ui/core';
import { useCartContext } from '../context/CartContext';
import '../components/CSS/CartPage.css';
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
const CartPage = () => {
    const { cart } = useCartContext();
    if (cart.length < 1) {
        return (
            <div className='page__100'>
                <div className='container__empty__title'>
                    <h2>Your cart is empty</h2>
                </div>
                <div className='container__home__button'>
                    <ButtonStyled>
                        <Link to='/' className='link__to__home'>
                            return to home
                        </Link>
                    </ButtonStyled>
                </div>
            </div>
        );
    }
    return (
        <Grid container justify='center' item lg={12} className='cart__main__container'>
            <div className='cart__inner__container'>
                <Cart />
            </div>
        </Grid>
    );
};
export default CartPage;
