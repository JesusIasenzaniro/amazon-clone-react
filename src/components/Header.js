import React from 'react';
import '../components/CSS/Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Amazon__logo from '../assets/amazon__logo.png';
import { useUserContext } from '../context/UserContext';
import { useCartContext } from '../context/CartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { DrawerHeader } from './HeaderComponents/DrawerHeader';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import '../components/CSS/CartButton.css';

export const ButtonStyled = withStyles(() => ({
    root: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '12px',
        margin: '1px',
        '&:hover': {
            backgroundColor: 'white',
            color: '#FF9900',
        },
    },
}))(Button);

export const IconStyled = withStyles(() => ({
    root: {
        // backgroundColor: 'transparent',
        fontSize: '30px',
        margin: '1px',
        color: '#FF9900',
        // '&:hover': {
        //     backgroundColor: 'white',
        //     color: '#FF9900',
        // },
    },
}))(ShoppingBasketOutlinedIcon);
function Header() {
    const { loginWithRedirect, myUser, logout } = useUserContext();
    const { clearCart, total_items } = useCartContext();
    const { user } = useAuth0();

    return (
        <AppBar position='static' style={{ backgroundColor: '#030c1bf6' }}>
            <Toolbar>
                <Grid lg={12} item container spacing={1} alignItems='center' justify='space-around'>
                    <Grid container justify='center' item lg={1} md={1} sm={1} xs={1}>
                        <Link to='/'>
                            <div className='img__container'>
                                <img src={Amazon__logo} alt='amazon__logo' />
                            </div>
                        </Link>
                    </Grid>
                    <Hidden mdDown>
                        <Grid container justify='center' item lg={2} md={1} sm={1} xs={1}>
                            <ButtonStyled>
                                {myUser ? (
                                    <div>
                                        <p
                                            onClick={() => {
                                                clearCart();
                                                logout({ returnTo: window.location.origin });
                                            }}
                                        >
                                            <h5> Hello, {user ? user.given_name : null}</h5>
                                        </p>
                                        <h5> Log out</h5>
                                    </div>
                                ) : (
                                    <div className='options__container'>
                                        <h5 onClick={loginWithRedirect}>Hello, log in or register</h5>
                                    </div>
                                )}
                            </ButtonStyled>
                        </Grid>
                    </Hidden>
                    <Hidden smDown>
                        <Grid container justify='center' item lg={1} md={1} sm={1} xs={1}>
                            <Link to='/ProductsPages' className='Link'>
                                <ButtonStyled>
                                    <h5>Products</h5>
                                </ButtonStyled>
                            </Link>
                        </Grid>
                    </Hidden>
                    <Grid item lg={1} md={1} sm={1} xs={1} container justify='center'>
                        <ButtonStyled>
                            <div className='shopping__container'>
                                <div className='icon__container'>
                                    <Link to='/CartPage'>
                                        <IconStyled />
                                    </Link>
                                </div>
                                <div>{total_items}</div>
                            </div>
                        </ButtonStyled>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1} container justify='center'>
                        <DrawerHeader />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
export default Header;