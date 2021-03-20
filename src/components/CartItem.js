import React from 'react';
import '../components/CSS/CartItem.css';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';
import AmountButtons from '../components/AmountButtons';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
export const ButtonStyled = withStyles((theme) => ({
    root: {
        color: 'rgb(120, 166, 187)',
        width: '30px',
    },
}))(Button);
const CartItem = ({ id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext();

    const increase = () => {
        toggleAmount(id, 'inc');
    };
    const decrease = () => {
        toggleAmount(id, 'dec');
    };

    return (
        <div className='container__cart__item'>
            <Grid container justify='space-evenly' className='details__product'>
                <Grid item lg={2} md={3} sm={5} xs={12} className='cart__item'>
                    <Grid container direction='column' alignItems='center' justify='center' className='product__item__container'>
                        <h4>{name}</h4>
                        <img src={image} alt={name} className='cart__image' />
                        <div className='amount__cart__product'>
                            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                        </div>
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid item lg={2} md={2} sm={4} xs={12} className='price__cart__product'>
                        <div>
                            <p>{formatPrice(price * amount)}</p>
                        </div>
                    </Grid>

                    <Grid container alignItems='center' item lg={2} md={2} sm={4} xs={12} className='color__product'>
                        <div className='inner__color__product'>
                            <button style={{ background: color }}></button>
                        </div>
                    </Grid>
                    <Grid container alignItems='center' item lg={2} md={2} sm={8} xs={12} className='delete__cart__product'>
                        <ButtonStyled>
                            <DeleteIcon onClick={() => removeItem(id)} />
                        </ButtonStyled>
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Grid container justify='center' className='remove__item__sm'>
                        <ButtonStyled>
                            <DeleteIcon onClick={() => removeItem(id)} />
                        </ButtonStyled>
                    </Grid>
                    <Container maxWidth='sm'>
                        <Divider />
                        <Grid container alignItems='center' justify='space-evenly'>
                            <div className='color__title__sm'>
                                <h4>Color</h4>
                            </div>
                            <div className='color__product'>
                                <button style={{ background: color }}></button>
                            </div>
                        </Grid>
                        <Divider />
                        <Grid container justify='space-evenly' className='price__sm__down'>
                            <div>
                                <h4 className='price__sm'>Price</h4>
                            </div>
                            <div>{formatPrice(price)}</div>
                        </Grid>
                    </Container>
                </Hidden>
            </Grid>
        </div>
    );
};

export default CartItem;
