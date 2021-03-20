import React from 'react';
import { Divider, Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../components/CSS/Cart.css';
import { useCartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import CartTotals from '../components/CartTotals';
import CartColumns from '../components/CartColumns';
import Button from '@material-ui/core/Button';

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

export const Cart = () => {
    const { cart, clearCart } = useCartContext();

    return (
        <div className='cart__container'>
            <div className='container__product'>
                <CartColumns />
                <Hidden smDown>
                    <Divider />
                </Hidden>
                <div className='cart__item__container'>
                    {cart.map((item) => {
                        return (
                            <div>
                                <CartItem key={item.id} {...item} />
                                <Divider />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Grid container justify='center' className='clear__cart__button'>
                <ButtonStyled onClick={clearCart}>Clear Cart</ButtonStyled>
            </Grid>
            <Divider />
            <Grid>
                <CartTotals />
            </Grid>
        </div>
    );
};
