import React from 'react';
import '../components/CSS/CartTotals.css';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { useUserContext } from '../context/UserContext';

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
const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext();
    const { myUser, loginWithRedirect } = useUserContext();

    // onClick={toTheForm}
    return (
        <Container maxWidth='md'>
            <div className='main__container'>
                <div className='container__cart__totals'>
                    <div className='container__subtotal'>
                        <h5 className='subtotal'>Subtotal:</h5>
                    </div>
                    <div className='container__for__price'>
                        <p className='cart__price'>{formatPrice(total_amount)}</p>
                    </div>
                </div>
                <div className='container__shipping__fee'>
                    <div className='shipping__fee'>
                        <h5 className='shipping__fee__title'>Shipping Fee: </h5>
                    </div>
                    <div className='container__for__fee'>
                        <p className='fee'>{formatPrice(shipping_fee)}</p>
                    </div>
                </div>
                <Divider />
                <div className='container__main__total'>
                    <div className='container__total'>
                        <h4 className='total'>Order Total:</h4>
                    </div>
                    <div className='container__for__total'>
                        <p className='main__total'>{formatPrice(total_amount + shipping_fee)}</p>
                    </div>
                </div>
                <div className='container__button__checkout'>
                    {myUser ? (
                        <Link to='/FormPage' className='link__to__checkout'>
                            <ButtonStyled>proceed to checkout</ButtonStyled>
                        </Link>
                    ) : (
                        <ButtonStyled onClick={loginWithRedirect}>proceed to checkout</ButtonStyled>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default CartTotals;
