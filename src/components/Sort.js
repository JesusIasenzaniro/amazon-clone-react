import React from 'react';
import './CSS/Sort.css';
import { useFilterContext } from '../context/FilterContext';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridOnIcon from '@material-ui/icons/GridOn';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Grid from '@material-ui/core/Grid';
import { SearchInput } from '../components/SearchInput';
export const ButtonStyled = withStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        margin: '4px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
        '&:focus': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);

const Sort = () => {
    const { filtered_products: products, setGridView, setListView, sort, updateSort } = useFilterContext();
    return (
        <Grid container justify='space-evenly' alignItems='center' className='container__sort'>
            <div>
                <ButtonStyled onClick={setGridView}>
                    <GridOnIcon style={{ fontSize: '19px' }} />
                </ButtonStyled>
                <ButtonStyled onClick={setListView} s>
                    <ListAltIcon style={{ fontSize: '20px' }} />
                </ButtonStyled>
            </div>

            <div>
                <form>
                    <label htmlFor='sort'>sort by</label>
                    <select name='sort' id='sort' className='sort__input' value={sort} onChange={updateSort}>
                        <option value='price-lowest'>price (lowest)</option>
                        <option value='price-highest'>price (highest)</option>
                        <option value='name-a'>name (a-z)</option>
                        <option value='name-z'>name (z-a)</option>
                    </select>
                </form>
            </div>

            <div className='products__found'>
                <p>
                    <span className='number__of__products'>{products.length} </span>products found
                </p>
            </div>
        </Grid>
    );
};

export default Sort;
