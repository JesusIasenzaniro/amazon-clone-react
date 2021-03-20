import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProductsDummy from '../constants/productsExamples';
import { withStyles } from '@material-ui/core/styles';
import { AddCartButton } from '../components/AddCartButton';
import { StarStyled } from '../components/GeneralStyles/StarStyled';
import '../components/CSS/FeaturedCartProducts.css';
import { products_url } from '../constants/URLForProducts';
const TypographyStyled = withStyles((theme) => ({
    root: {
        fontSize: '15px',
    },
}))(Typography);

const TypographyStyled2 = withStyles((theme) => ({
    root: {
        fontSize: '20px',
        color: 'rgb(120, 166, 187)',
    },
}))(Typography);

export const FeaturedCartProducts = () => {
    return (
        <Grid container justify='space-evenly' alignItems='center' className='container__cart__products' style={{ backgroundColor: 'white' }}>
            {products_url.map((product) => {
                const { id, title, picture, price } = product;
                return (
                    <Grid item lg={0} md={2} sm={4} xs={12} key={id}>
                        <Grid className='product__data__image'>
                            <img className='image__product' src={picture} alt='img' />
                        </Grid>
                        <Grid>
                            <Grid className='product__data'>
                                <TypographyStyled2>{title}</TypographyStyled2>
                            </Grid>
                            <Grid className='product__data'>
                                <StarStyled />
                            </Grid>
                            <Grid className='product__data'>
                                <TypographyStyled>{price}</TypographyStyled>
                            </Grid>
                            <Grid>
                                <Grid className='product__data'>
                                    <AddCartButton />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
};
