import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import AmountButtons from '../components/AmountButtons';
import '../components/CSS/ProductInfoSingleProductPage.css';
import CheckIcon from '@material-ui/icons/Check';
import { useCartContext } from '../context/CartContext';
import { useAuth0 } from '@auth0/auth0-react';
const ButtonStyled = withStyles((theme) => ({
    root: {
        width: ' 100%',
        margin: '0px',
        fontSize: '12px',
        background: ' linear-gradient(to bottom, #FFE17D 0%, #FFD978 50%, #FFC376 100%);',
        border: '1px solid #493323',
        padding: '10px',
        '&:hover': {
            background: 'linear-gradient(to bottom, #EAB165 0%, #FFA94D 50%, #E08934 100%);',
        },
    },
}))(Button);
const ButtonStyled2 = withStyles((theme) => ({
    root: {
        width: ' 100%',
        marginTop: '10px',
        fontSize: '12px',
        background: ' linear-gradient(to bottom, #FFE17D 0%, #FFD978 50%, #FFC376 100%);',
        border: '1px solid #493323',
        padding: '10px',
        '&:hover': {
            background: 'linear-gradient(to bottom, #EAB165 0%, #FFA94D 50%, #E08934 100%);',
        },
    },
}))(Button);

export const AddToCart = ({ product }) => {
    const { loginWithRedirect, user } = useAuth0();
    const { addToCart } = useCartContext();
    const { id, stock, colors } = product;
    const [amount, setAmount] = useState(1);
    const [mainColor, setMainColor] = useState(colors[0]);

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if (tempAmount > stock) {
                tempAmount = stock;
            }
            return tempAmount;
        });
    };

    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1;
            }
            return tempAmount;
        });
    };

    return (
        <Grid className='container__add'>
            <Link to='/CartPage' className='Link' onClick={() => addToCart(id, mainColor, amount, product)}>
                <Grid>
                    <ButtonStyled>ADD TO CART</ButtonStyled>
                </Grid>
            </Link>
            {user ? (
                <Link to='/FormPage' className='Link' onClick={() => addToCart(id, mainColor, amount, product)}>
                    <Grid>
                        <ButtonStyled2>BUY NOW</ButtonStyled2>
                    </Grid>
                </Link>
            ) : (
                <Grid onClick={loginWithRedirect}>
                    <ButtonStyled2>BUY NOW</ButtonStyled2>
                </Grid>
            )}
            <Grid container justify='center' alignItems='center' className='container__amount'>
                <div className='container__quatity'>
                    <AmountButtons amount={amount} increase={increase} decrease={decrease} />{' '}
                </div>
            </Grid>
            <Grid container justify='center' alignItems='center'>
                <div className='container__color'>
                    <Grid container>
                        <div className='container__color__title'>Color: </div>
                        {colors.map((color, index) => {
                            return (
                                <button key={index} style={{ background: color }} className={`${mainColor === color ? 'color__btn active2' : 'color__btn'}`} onClick={() => setMainColor(color)}>
                                    {mainColor === color ? <CheckIcon style={{ width: '19px', color: 'white' }} /> : null}
                                </button>
                            );
                        })}
                    </Grid>
                </div>
            </Grid>
            <Grid container justify='center' alignItems='center' className='container__secure__transaction'>
                <LockIcon style={{ color: 'rgb(57, 90, 105)' }}></LockIcon>

                <div className='secure__transaction'>Secure Transaction</div>
            </Grid>
        </Grid>
    );
};
