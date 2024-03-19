import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SimpleCarousel = () => {
    return (
        <Carousel>
            <div>
            <img className='cPic' src='https://res.cloudinary.com/dg9itycrz/image/upload/v1710853173/pexels-suzy-hazelwood-3604571_imrvj3.jpg' />

                <p className="legend">Slide 1</p>
            </div>
            <div>
            <img className='cPic' src='https://res.cloudinary.com/dg9itycrz/image/upload/v1710853173/pexels-suzy-hazelwood-3604571_imrvj3.jpg' />

                <p className="legend">Slide 2</p>
            </div>
            <div>
            <img className='cPic' src='https://res.cloudinary.com/dg9itycrz/image/upload/v1710853173/pexels-suzy-hazelwood-3604571_imrvj3.jpg' />

                <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    );
}

export default SimpleCarousel;
