import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';
// import { useProductsContext } from '../context/ProductsContext';

export const Product = ({ image, name, price, id }) => {
    return (
        <Grid item lg={3} md={3} sm={4} xs={8} className='container__featured__products'>
            <h4>{name}</h4>
            <div className='container__products__images'>
                <Link to={`/ProductsPages/${id}`}>
                    <img alt={name} src={image} />
                </Link>
            </div>
            <h4 className='price'>{formatPrice(price)}</h4>
        </Grid>
    );
};
