import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const ButtonStyled = withStyles(() => ({
    root: {
        margin: '0px',
        fontSize: '9px',
        background: ' linear-gradient(to bottom, #FFE17D 0%, #FFD978 50%, #FFC376 100%);',
        border: '1px solid #493323',
        padding: '10px',
        '&:hover': {
            background: 'linear-gradient(to bottom, #EAB165 0%, #FFA94D 50%, #E08934 100%);',
        },
    },
}))(Button);

export const AddCartButton = () => {
    return (
        <div>
            <ButtonStyled>AÑADIR A LA CESTA</ButtonStyled>
        </div>
    );
};
