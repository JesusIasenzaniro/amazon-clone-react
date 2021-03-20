import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import '../CSS/ProductInfoSingleProductPage.css';
import { FirstPart } from '../ComponentsForInfoProduct/FirstPart';
import { Price } from '../ComponentsForInfoProduct/Price';
import { Description } from '../ComponentsForInfoProduct/Description';

export const ProductInfoSingleProductPage = ({ name, price, description, reviews, sku, company, stars }) => {
    return (
        <Grid className='container__info'>
            <FirstPart name={name} reviews={reviews} sku={sku} company={company} stars={stars} />
            <Divider />
            <Price price={price} />
            <Divider />
            <Description description={description} />
        </Grid>
    );
};
