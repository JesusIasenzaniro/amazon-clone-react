import { withStyles } from '@material-ui/core/styles';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
const Star = ({ stars }) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return <span key={index}>{stars >= index + 1 ? <StarStyled /> : stars >= number ? <StarStyledMedium /> : <StarStyledEmpty />}</span>;
    });
    return <span>{tempStars}</span>;
};
export const StarStyled = withStyles(() => ({
    root: {
        color: '#FFD83B',
    },
}))(StarOutlinedIcon);

export const StarStyledMedium = withStyles(() => ({
    root: {
        color: '#FFD83B',
    },
}))(StarHalfOutlinedIcon);

export const StarStyledEmpty = withStyles(() => ({
    root: {
        color: '#FFD83B',
    },
}))(StarOutlineOutlinedIcon);

export default Star;
