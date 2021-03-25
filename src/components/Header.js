import React from 'react';
import '../components/CSS/Header.css';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
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
        // marginRight: '7px',
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
                <Grid container alignItems='center' item lg={2} md={2} sm={2} xs={2}>
                    <Grid item lg={4} md={5} sm={5} xs={10} className='container__header__items'>
                        <Link to='/'>
                            <div className='img__container'>
                                <img src={Amazon__logo} alt='amazon__logo' />
                            </div>
                        </Link>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item lg={4} md={5} sm={3} xs={1} className='container__header__items'>
                            {user ? (
                                <div className='container__name__user'>
                                    {' '}
                                    <h5> Hello, {user ? user.given_name : 'user'}</h5>{' '}
                                </div>
                            ) : (
                                <ButtonStyled1 onClick={loginWithRedirect}>
                                    <div className='container__header__items'>
                                        <h5>Register</h5>
                                    </div>
                                </ButtonStyled1>
                            )}
                        </Grid>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={2} md={2} sm={1} xs={1} className='container__header__items'>
                            {myUser ? (
                                <div>
                                    <ButtonStyled
                                        onClick={() => {
                                            clearCart();
                                            logout({ returnTo: window.location.origin });
                                        }}
                                    >
                                        <h5>Log out</h5>
                                    </ButtonStyled>
                                </div>
                            ) : (
                                <ButtonStyled onClick={loginWithRedirect}>
                                    <div className='options__container'>
                                        <h5> Log in </h5>
                                    </div>
                                </ButtonStyled>
                            )}
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid container item lg={8} md={8} sm={8} xs={5}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <SearchInput />
                    </Grid>
                </Grid>

                <Grid container alignItems='center' item lg={2} md={2} sm={2} xs={4}>
                    <Hidden mdDown>
                        <Grid item lg={5} md={3} sm={1} xs={1} className='container__header__items'>
                            <Link to='/ProductsPages' className='Link'>
                                <ButtonStyled1>
                                    <h5>Products</h5>
                                </ButtonStyled1>
                            </Link>
                        </Grid>
                    </Hidden>
                    <Grid item lg={2} md={7} sm={8} xs={6} container justify='center' className='container__header__items'>
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
                    <Grid item lg={4} md={1} sm={1} xs={4} container justify='center' className='container__header__items'>
                        <DrawerHeader />
                    </Grid>
                </Grid>
                {/* <Hidden smUp>
                    <Grid item lg={5} md={8} sm={7} xs={11}>
                        <SearchInput />
                    </Grid>
                </Hidden> */}
            </Grid>
        </AppBar>
    );
}
export default Header;
