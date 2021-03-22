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
import { SearchInput } from '../components/SearchInput';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import '../components/CSS/CartButton.css';

export const ButtonStyled = withStyles(() => ({
    root: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '12px',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: 'white',
            color: '#FF9900',
        },
    },
}))(Button);
export const ButtonStyled1 = withStyles(() => ({
    root: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '12px',
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
            <Grid container alignItems='center' justify='space-around'>
                <Grid item lg={1} md={1} sm={1} xs={1} className='container__header__items'>
                    <Link to='/'>
                        <div className='img__container'>
                            <img src={Amazon__logo} alt='amazon__logo' />
                        </div>
                    </Link>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={1} md={1} sm={1} xs={1} className='container__header__items'>
                        {user ? (
                            <div className='container__name__user'>
                                {' '}
                                <h5> Hello, {user ? user.given_name : 'user'}</h5>{' '}
                            </div>
                        ) : (
                            <div className='container__header__items' onClick={loginWithRedirect}>
                                <ButtonStyled1>
                                    <h5>Register</h5>
                                </ButtonStyled1>
                            </div>
                        )}
                    </Grid>
                </Hidden>
                <Hidden mdDown>
                    <Grid item lg={1} md={1} sm={1} xs={1} className='container__header__items'>
                        <ButtonStyled>
                            {myUser ? (
                                <div>
                                    <h5
                                        onClick={() => {
                                            clearCart();
                                            logout({ returnTo: window.location.origin });
                                        }}
                                    >
                                        {' '}
                                        Log out
                                    </h5>
                                </div>
                            ) : (
                                <div className='options__container' onClick={loginWithRedirect}>
                                    <h5> Log in </h5>
                                </div>
                            )}
                        </ButtonStyled>
                    </Grid>
                </Hidden>

                <Hidden xsDown>
                    <Grid item lg={6} md={8} sm={7} xs={3} className='container__search__input'>
                        <SearchInput />
                    </Grid>
                </Hidden>

                <Hidden mdDown>
                    <Grid item lg={1} md={1} sm={1} xs={1} className='container__header__items'>
                        <Link to='/ProductsPages' className='Link'>
                            <ButtonStyled1>
                                <h5>Products</h5>
                            </ButtonStyled1>
                        </Link>
                    </Grid>
                </Hidden>
                <Grid item lg={1} md={1} sm={1} xs={1} container justify='center' className='container__header__items'>
                    <ButtonStyled1>
                        <div className='shopping__container'>
                            <div className='icon__container'>
                                <Link to='/CartPage'>
                                    <IconStyled />
                                </Link>
                            </div>
                            <div>{total_items}</div>
                        </div>
                    </ButtonStyled1>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1} container justify='center' className='container__header__items'>
                    <DrawerHeader />
                </Grid>
                <Hidden smUp>
                    <Grid item lg={5} md={8} sm={7} xs={11}>
                        <SearchInput />
                    </Grid>
                </Hidden>
            </Grid>
        </AppBar>
    );
}
export default Header;
