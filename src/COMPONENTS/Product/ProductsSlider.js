import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import './ProductsSlider.css';

const ProductsSlider = (props) => {
    const { products, categoryname } = props;

    const responsive = {
        display6: { breakpoint: { max: 2000, min: 1700 }, items: 6 },
        display5: { breakpoint: { max: 1700, min: 1200 }, items: 5 },
        display4: { breakpoint: { max: 1200, min: 900 }, items: 4 },
        display3: { breakpoint: { max: 900, min: 600 }, items: 3 },
        display1: { breakpoint: { max: 600, min: 500 }, items: 2 },
        display0: { breakpoint: { max: 500, min: 450 }, items: 1 }
    };

    return (
        <div className='productsliderout' >
            <h1>{categoryname}</h1>
            <Carousel responsive={responsive} 
                autoPlay={true}
                autoPlaySpeed={1000}
                swipeable={true}
                draggable={true}
                shouldResetAutoplay={true}
            >
                {products.map((item,index) => (
                    <ProductCard data={item}  key={index} />
                ))}
            </Carousel>
        </div >
    );
}

export default ProductsSlider;
