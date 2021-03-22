import React from 'react';
// import { withStyles, fade } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
import { useFilterContext } from '../context/FilterContext';
import '../components/CSS/Header.css';
// import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

// export const ButtonStyled = withStyles(() => ({
//     root: {
//         backgroundColor: '#FF9900',
//         color: 'white',
//         fontSize: '9px',
//         margin: '1px',
//         '&:hover': {
//             backgroundColor: 'transparent',
//         },
//     },
// }))(Button);

// const BootstrapInput = withStyles((theme) => ({
//     root: {
//         'label + &': {
//             marginTop: theme.spacing(3),
//         },
//     },
//     input: {
//         borderRadius: 4,
//         position: 'relative',
//         backgroundColor: theme.palette.common.white,
//         border: '2px solid #FF9900',
//         fontSize: 16,

//         padding: '10px 12px',
//         transition: theme.transitions.create(['border-color', 'box-shadow']),
//         '&:focus': {
//             boxShadow: `${fade('#FF9900', 1)} 0 0 0 0.1rem`,
//             borderColor: '#FF9900',
//         },
//     },
// }))(InputBase);

export const SearchInput = () => {
    const history = useHistory();
    const {
        filters: { text },
        updateFilters,
    } = useFilterContext();

    const searchProduct = () => {
        text ? history.push('/ProductsPages') : history.push('/');
    };

    const classes = useStyles();
    return (
        <div className='container__search__input'>
            <form>
                <Paper className={classes.root}>
                    <InputBase
                        id='standard-full-width'
                        className={classes.input}
                        placeholder='search for dining...'
                        onChange={updateFilters}
                        fullWidth
                        name='text'
                        value={text}
                        inputlabelprops={{
                            shrink: true,
                        }}
                    />
                    <IconButton className={classes.iconButton} aria-label='search' onClick={searchProduct}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </form>
        </div>
    );
};
// return (
//     <div className='container__search__input'>
//         <form onSubmit={(e) => e.preventDefault()}>
//             <BootstrapInput
//                 id='standard-full-width'
//                 label='Label'
//                 // style={{ marginTop: '8px', marginBottom: '8px' }}
//                 fullWidth
//                 name='text'
//                 value={text}
//                 onChange={updateFilters}
//                 inputlabelprops={{
//                     shrink: true,
//                 }}
//             />
//         </form>
//     </div>
// );
