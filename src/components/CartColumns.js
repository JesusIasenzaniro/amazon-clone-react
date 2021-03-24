import React from 'react';
import '../components/CSS/CartColumns.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
const CartColumns = () => {
    return (
        <Hidden smDown>
            <Grid container justify='space-evenly' className='container__columns'>
                <Grid item lg={2} md={4} sm={1} xs={12}>
                    <h3 className='item'>Item</h3>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={12}>
                    <h3 className='subtotal'>Subtotal</h3>
                </Grid>
                <Grid item lg={2} md={4} sm={4} xs={12}>
                    <h3 className='product__color'>Color</h3>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={12}></Grid>
            </Grid>
        </Hidden>
    );
};

export default CartColumns;
