import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Star from '../GeneralStyles/StarStyled';
import { withStyles } from '@material-ui/core/styles';
import '../CSS/ProductInfoSingleProductPage.css';
import Reviews from '../Reviews';
export const TypographyStyled = withStyles(() => ({
    root: {
        color: 'rgb(120, 166, 187)',
        paddingLeft: '10px',
    },
}))(Typography);
export const FirstPart = ({ name, stock, company, stars, reviews }) => {
    return (
        <div>
            <div className='product__name'>{name}</div>
            <Grid container justify='center' className='container__assessment'>
                <Star stars={stars} />
            </Grid>
            <Grid container className='container__reviews'>
                <Reviews reviews={reviews} />
            </Grid>
            <Grid className='container__assessment'>
                <TypographyStyled>
                    <span className='container__assessment__title'>Available: </span>
                    {stock > 0 ? 'in stock' : 'out of the stock'}
                </TypographyStyled>
            </Grid>
            <Grid container className='container__assessment'>
                <TypographyStyled>
                    <span className='container__assessment__title'>Company</span>: {company}
                </TypographyStyled>
            </Grid>
        </div>
    );
};
