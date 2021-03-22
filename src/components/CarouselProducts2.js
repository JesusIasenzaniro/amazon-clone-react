/* eslint-disable array-callback-return */
import { Grid } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useProductsContext } from '../context/ProductsContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../context/FilterContext';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { formatPrice } from '../utils/formatPrice';

export const ButtonStyled = withStyles(() => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        fontSize: '15px',
        margin: '1px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);

const CarouselProducts2 = () => {
    const {
        // filters: { category },
        updateFilters,
    } = useFilterContext();

    const history = useHistory();

    const productsDepartment = () => {
        updateFilters({
            target: {
                name: 'category',
                textContent: 'office',
            },
        });

        history.push('/ProductsPages');
    };
    const { products_loading: loading, products_error: error, products } = useProductsContext();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <div>
            <Grid container justify='center' className='container__category'>
                <ButtonStyled className='container__category__product' onClick={productsDepartment}>
                    <h2>Office</h2>
                </ButtonStyled>
            </Grid>
            <Carousel
                className='container__carousel'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass='container'
                dotListClass=''
                draggable
                focusOnSelect={false}
                infinite
                itemClass=''
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                // showDots={true}
                sliderClass=''
                slidesToSlide={1}
                swipeable={true}
            >
                {products.map((product) => {
                    const { id, image, category, name, price } = product;
                    if (category === 'office') {
                        return (
                            <Grid key={id} className='container__carousel_products' item container justify='center' alignItems='center'>
                                <main>
                                    <div className='carousel__title'>
                                        <h3>{name}</h3>
                                    </div>
                                    <div className='carousel__title'>
                                        <h4>{formatPrice(price)}</h4>
                                    </div>
                                    <Link to={`/ProductsPages/${id}`}>
                                        <img src={image} alt='images' width='230px' height='220px' />
                                    </Link>
                                </main>
                            </Grid>
                        );
                    }
                })}
            </Carousel>
        </div>
    );
};
export default CarouselProducts2;
