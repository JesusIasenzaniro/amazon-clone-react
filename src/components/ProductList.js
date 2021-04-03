import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import GridView from '../components/GridView';
import ListView from '../components/ListView';
import Grid from '@material-ui/core/Grid';
import '../components/CSS/ProductList.css';
const ProductList = () => {
    const { filtered_products: products, grid_view } = useFilterContext();

    if (products.length < 1) {
        return (
            <Grid className='container__no__match'>
                <h5 style={{ textTransform: 'none' }}>Sorry, no products matched your search...</h5>
            </Grid>
        );
    }
    if (grid_view === true) {
        return <GridView products={products}>ProductList</GridView>;
    }
    return <ListView products={products} />;
};

export default ProductList;
