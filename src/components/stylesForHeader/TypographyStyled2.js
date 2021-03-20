import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
export const TypographyStyled2 = withStyles(() => ({
    root: {
        fontSize: '12px',
        lineHeight: '1',
        marginRight: '5px',
    },
}))(Typography);
