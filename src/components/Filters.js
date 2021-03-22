import React from 'react';
import './CSS/Filters.css';
import { useFilterContext } from '../context/FilterContext';
import { getUniqueValues, formatPrice } from '../utils/formatPrice';
import CheckIcon from '@material-ui/icons/Check';

const Filters = () => {
    const {
        filters: { company, category, color, min_price, price, max_price, shipping },
        updateFilters,
        clearFilters,
        all_products,
    } = useFilterContext();
    const categories = getUniqueValues(all_products, 'category');
    const companies = getUniqueValues(all_products, 'company');
    const colors = getUniqueValues(all_products, 'colors');

    return (
        <main className='container__filters'>
            <h4>Categories</h4>
            <div>
                {categories.map((categorie, index) => {
                    return (
                        <div className='container__categories'>
                            <button
                                key={index}
                                className={`${category === categorie.toLowerCase() ? 'categorie__button active__categorie' : 'categorie__button'}`}
                                onClick={updateFilters}
                                name='category'
                            >
                                {categorie}
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className='container__company'>
                <h5>Company</h5>
                <select name='company' value={company} onChange={updateFilters} className='select__company'>
                    {companies.map((companie, index) => {
                        return (
                            <option key={index} value={companie}>
                                {companie}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className='container__colors'>
                <h5>Colors</h5>

                <div className='colors'>
                    {colors.map((c, index) => {
                        if (c === 'all') {
                            return (
                                <button key={index} name='color' onClick={updateFilters} data-color='all' className={`${color === 'all' ? 'all__btn  active__all__selection ' : 'all__btn'}`}>
                                    all
                                </button>
                            );
                        }
                        return (
                            <button
                                key={index}
                                name='color'
                                style={{ background: c }}
                                className={`${color === c ? 'select__color active__selection ' : 'select__color'}`}
                                data-color={c}
                                onClick={updateFilters}
                            >
                                {color === c ? <CheckIcon style={{ color: 'white', width: '20px' }} /> : null}
                            </button>
                        );
                    })}
                </div>
                <div className='container__price__filter'>
                    <h5>Price</h5>
                    <p className='price__filter'>{formatPrice(price)}</p>
                    <input type='range' name='price' onChange={updateFilters} min={min_price} max={max_price} value={price}></input>
                </div>

                <div className='container__shipping'>
                    <div className='container__label'>
                        <label htmlFor='shipping'>free shipping</label>
                    </div>
                    <div className='box__shipping'>
                        <input className='shipping__box' type='checkbox' name='shipping' id='shipping' onChange={updateFilters} checked={shipping}></input>
                    </div>
                </div>
                <div className='container__clear__button'>
                    <button type='button' className='clear__btn' onClick={clearFilters}>
                        Clear filters{' '}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Filters;
