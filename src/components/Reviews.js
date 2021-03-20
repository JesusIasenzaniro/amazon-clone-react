import React from 'react';
import '../components/CSS/ProductInfoSingleProductPage.css';
const Reviews = ({ reviews }) => {
    return (
        <div>
            Reviews: <span className='reviews'>{reviews} customer reviews</span>{' '}
        </div>
    );
};

export default Reviews;
