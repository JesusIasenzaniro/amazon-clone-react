import React from 'react';
import '../CSS/Gallery.css';
export const ProductDescription = ({ description }) => {
    return (
        <div className='container__product__description'>
            <h3>Description</h3>
            <div className='description'>{description}</div>
        </div>
    );
};
