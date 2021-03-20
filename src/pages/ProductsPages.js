import React from 'react';
import ProductList from '../components/ProductList';
import Grid from '@material-ui/core/Grid';
import Filters from '../components/Filters';
import Container from '@material-ui/core/Container';
import { SearchInput } from '../components/SearchInput';
import '../components/CSS/ProductsPages.css';
const ProductsPages = () => {
    return (
        <Container maxWidth='lg'>
            <Grid className='container__filters__list'>
                <Grid>
                    <Grid className='container__search__input'>
                        <SearchInput />
                    </Grid>
                    <Filters />
                </Grid>
                <Grid container justify='center' alignItems='flex-start' className='container__product__list'>
                    <ProductList />
                </Grid>
            </Grid>
        </Container>
    );
};
export default ProductsPages;
