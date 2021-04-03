import React, { useEffect } from 'react';
import { Gallery } from '../components/ComponentForSingleProduct/Gallery';
import { ProductInfoSingleProductPage } from '../components/ComponentForSingleProduct/ProductInfoSingleProductPage';
import { AddToCart } from '../components/AddToCart';
import { Grid } from '@material-ui/core';
import { single_product_url as url } from '../constants/URLForProducts';
import { useProductsContext } from '../context/ProductsContext';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import '../components/CSS/SingleProductPage.css';
import { DepartmentProducts } from '../components/DepartmentProducts';

export const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext();
    const productChange = product.category;
    const productId = product.id;

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/');
            }, 3000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    const { stock } = product;

    return (
        <Grid className='container__single__product'>
            <Grid container justify='center'>
                <Gallery {...product} />
                <ProductInfoSingleProductPage {...product} />
                {stock > 0 && <AddToCart product={product} />}
            </Grid>
            <Grid className='container__department__products'>
                <DepartmentProducts {...product} productChange={productChange} productId={productId} />
            </Grid>
        </Grid>
    );
};
