import React from 'react';
import Sort from '../components/Sort';
import './CSS/ListView.css';
import { formatPrice } from '../utils/formatPrice';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
const ListView = ({ products }) => {
    return (
        <Grid container justify='center'>
            <Sort />
            {products.map((product) => {
                const { id, image, name, price, description } = product;
                return (
                    <main key={id} className='container__list'>
                        <Grid container justify='center' className='container__inner'>
                            <Grid item lg={4} md={4} sm={12} xs={12} className='container__price__product'>
                                <Link to={`/ProductsPages/${id}`}>
                                    <img src={image} alt={name} />
                                </Link>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} className='container__details'>
                                <div>
                                    <h4>{name}</h4>
                                    <h5 className='container__price'>{formatPrice(price)}</h5>
                                </div>
                                <div>
                                    <p>{description.substring(0, 150)}...</p>
                                </div>
                            </Grid>
                        </Grid>
                    </main>
                );
            })}
        </Grid>
    );
};

export default ListView;
