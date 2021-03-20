import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Product } from '../components/Product';
import { useProductsContext } from '../context/ProductsContext';
import Error from '../components/Error';
import Loading from '../components/Loading';

export const FeaturedProducts = () => {
    const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    return (
        <Grid container item lg={12} justify='space-between' alignItems='center'>
            {featured.slice(0, 6).map((product) => {
                return <Product key={product.id} {...product} />;
            })}
        </Grid>
    );
};
