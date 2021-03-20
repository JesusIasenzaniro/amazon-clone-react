import { UPDATE_FILTERS, FILTER_PRODUCTS, PRODUCTS_DEPARTMENT } from '../components/actions';
import { products_url } from '../constants/URLForProducts';

const FilterReducer = (state, action) => {
    if (action.type === UPDATE_FILTERS) {
        const { name, value } = action.payload;
        return { ...state, filters: { ...state.filters, [name]: value } };
    }

    if (action.type === FILTER_PRODUCTS) {
        const { all_products } = state;
        const { text, category, company, color, price, shipping } = state.filters;
        let tempProducts = [...all_products];
        if (text) {
            tempProducts = tempProducts.filter((product) => {
                return product.name.toLowerCase().startsWith(text);
            });
        }
        if (category !== 'all') {
            tempProducts = tempProducts.filter((product) => product.category === category);
        }
        if (company !== 'all') {
            tempProducts = tempProducts.filter((product) => product.company === company);
        }
        if (color !== 'all') {
            tempProducts = tempProducts.filter((product) => {
                return product.colors.find((c) => c === color);
            });
        }

        tempProducts = tempProducts.filter((product) => product.price <= price);

        if (shipping) {
            tempProducts = tempProducts.filter((product) => product.shipping === true);
        }
        return { ...state, filtered_products: tempProducts };
    }

    throw new Error(`No Matching '${action.type} - action type`);
};

export default FilterReducer;
