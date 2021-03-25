import { HomeCarousel } from '../components/HomeCarousel';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { FeaturedProductsCarousel } from '../components/FeaturedProductsCarousel';
import CarouselProducts2 from '../components/CarouselProducts2';
import CarouselProducts3 from '../components/CarouselProducts3';

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <FeaturedProducts />
            <FeaturedProductsCarousel />
            <CarouselProducts2 />
        </div>
    );
};
export default Home;
