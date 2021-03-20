import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/imagen1.jpg';
import image2 from '../assets/imagen2.jpg';
import image3 from '../assets/imagen3.jpg';

export const HomeCarousel = () => {
    return (
        <Carousel className='carousel__container' showStatus={false} showThumbs={false} showIndicators={false} dynamicHeight={true} infiniteLoop={true} autoPlay={true} swipeable={true}>
            <div>
                <img src={image1} alt='img1' />
            </div>
            <div>
                <img src={image2} alt='img2' />
            </div>
            <div>
                <img src={image3} alt='img3' />
            </div>
        </Carousel>
    );
};
