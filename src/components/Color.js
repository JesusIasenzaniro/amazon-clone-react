import React, { useState } from 'react';
import '../components/CSS/ProductInfoSingleProductPage.css';
import { Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
const Color = ({ product }) => {
    const { colors } = product;

    const [mainColor, setMainColor] = useState(colors[0]);

    return (
        <div>
            <Grid container>
                <div className='container__color__title'>Color: </div>
                {colors.map((color, index) => {
                    return (
                        <button key={index} style={{ background: color }} className={`${mainColor === color ? 'color__btn active2' : 'color__btn'}`} onClick={() => setMainColor(color)}>
                            {mainColor === color ? <CheckIcon style={{ width: '19px', color: 'white' }} /> : null}
                        </button>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Color;
