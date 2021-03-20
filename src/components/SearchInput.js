import React from 'react';
import { withStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { useFilterContext } from '../context/FilterContext';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '2px solid #FF9900',
        fontSize: 16,

        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade('#FF9900', 1)} 0 0 0 0.1rem`,
            borderColor: '#FF9900',
        },
    },
}))(InputBase);
export const SearchInput = () => {
    const {
        filters: { text },
        updateFilters,
    } = useFilterContext();
    // const categories = getUniqueValues(all_products, 'category');
    // const companies = getUniqueValues(all_products, 'company');
    // const colors = getUniqueValues(all_products, 'colors');
    // console.log(categories);
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <BootstrapInput
                    id='standard-full-width'
                    label='Label'
                    style={{ margin: 8 }}
                    fullWidth
                    name='text'
                    value={text}
                    onChange={updateFilters}
                    inputlabelprops={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    );
};
