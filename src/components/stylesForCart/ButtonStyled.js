import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ButtonStyled = withStyles(() => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        fontSize: '9px',
        margin: '1px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);

export const ButtonStyled2 = withStyles(() => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        width: '15px',
        height: '26px',

        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);

export const ButtonStyled3 = withStyles(() => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        width: '18px',
        height: '27px',
        margin: '5px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);
