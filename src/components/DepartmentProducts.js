/* eslint-disable array-callback-return */
import { Grid } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useProductsContext } from '../context/ProductsContext';
import { Link } from 'react-router-dom';
import '../components/CSS/DepartmentProducts.css';
import Star from './GeneralStyles/StarStyled';

export const DepartmentProducts = ({ productChange, productId, stars }) => {
    const { products } = useProductsContext();
    const handleProducts = products.filter((product) => product.category === productChange);
    if (handleProducts.length >= 3) {
        return (
            <div>
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
                        const { id, image, category, name } = product;
                        if (category === productChange) {
                            if (id === productId) {
                                return null;
                            }
                            return (
                                <Grid key={id} className='container__carousel_products' container justify='center' alignItems='center'>
                                    <main>
                                        <div className='product__department__details'>
                                            <h4>{name}</h4>
                                        </div>
                                        <div className='product__department__details'>
                                            <h4>{category}</h4>
                                        </div>
                                        <div>
                                            <Star stars={stars} />
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
    } else {
        return null;
    }
};
