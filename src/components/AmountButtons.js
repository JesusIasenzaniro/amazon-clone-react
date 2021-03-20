import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const ButtonStyled = withStyles((theme) => ({
    root: {
        color: 'rgb(120, 166, 187)',
        width: '30px',
    },
}))(Button);

const AmountButtons = ({ increase, decrease, amount }) => {
    return (
        <Grid container justify='center'>
            <div className='button__container'>
                <ButtonStyled onClick={decrease}>
                    <RemoveIcon className='amount__icon' />
                </ButtonStyled>
            </div>
            <div className='amount'>
                <h2>{amount}</h2>
            </div>

            <div className='button__container'>
                <ButtonStyled onClick={increase}>
                    <AddIcon className='amount__icon' />
                </ButtonStyled>
            </div>
        </Grid>
    );
};

export default AmountButtons;
