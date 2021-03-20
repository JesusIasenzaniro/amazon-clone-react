import React from 'react';
import Grid from '@material-ui/core/Grid';
import Sort from '../components/Sort';
import '../components/CSS/GridView.css';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';
const GridView = ({ products }) => {
    return (
        <Grid container justify='center'>
            <Sort />
            {products.map((product) => {
                const { id, image, name, price } = product;
                return (
                    <div key={id} className='container__grid__images'>
                        <div className='container__title__name'>
                            <h4>{name}</h4>
                        </div>
                        <div className='grid__images'>
                            <Link to={`/ProductsPages/${id}`}>
                                <img src={image} alt={name} className='grid__images' />
                            </Link>
                        </div>
                        <div>
                            <h5 className='container__grid__price'>{formatPrice(price)}</h5>
                        </div>
                    </div>
                );
            })}
        </Grid>
    );
};

export default GridView;
