import React, { useContext, useReducer, useEffect } from 'react';
import { useProductsContext } from './ProductsContext';
import reducer from '../reducers/FilterReducer';
import { LOAD_PRODUCTS, UPDATE_FILTERS } from '../components/actions';
import { SET_GRIDVIEW } from '../components/actions';
import { SET_LISTVIEW } from '../components/actions';
import { UPDATE_SORT } from '../components/actions';
import { SORT_PRODUCTS } from '../components/actions';
import { FILTER_PRODUCTS } from '../components/actions';
import { CLEAR_FILTERS } from '../components/actions';

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: false,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS });
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort, state.filters]);

    const setGridView = () => {
        dispatch({ type: SET_GRIDVIEW });
    };
    const setListView = () => {
        dispatch({ type: SET_LISTVIEW });
    };

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value });
    };
    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'category') {
            value = e.target.textContent;
        }
        if (name === 'color') {
            value = e.target.dataset.color;
        }
        if (name === 'price') {
            value = Number(value);
        }
        if (name === 'shipping') {
            value = e.target.checked;
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    };
    return <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFilters, clearFilters }}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
