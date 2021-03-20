import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { formatPrice } from '../../utils/formatPrice';
export const TypographyStyled = withStyles((theme) => ({
    root: {
        color: '#000',
        padding: '10px 0',
        marginLeft: '10px',
        fontSize: '18px',
    },
}))(Typography);
export const Price = ({ price }) => {
    return (
        <div>
            <TypographyStyled>
                Price :<span className='price'>{formatPrice(price)}</span>
            </TypographyStyled>
        </div>
    );
};
