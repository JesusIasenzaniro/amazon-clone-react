import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const TypographyStyled = withStyles(() => ({
    root: {
        fontWeight: 'bold',
        fontSize: '13px',
    },
}))(Typography);
