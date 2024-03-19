import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../Header";
import './index.css';

import Courses from '../Courses';

const data = [
    {
        img: 'https://res.cloudinary.com/dg9itycrz/image/upload/v1710866421/pexels-cottonbro-studio-10464476_wdssje.jpg',
        course: 'News Reporting'
    },
    {
        img: 'https://res.cloudinary.com/dg9itycrz/image/upload/v1710866421/pexels-cottonbro-studio-8369520_gzfzjx.jpg',
        course: 'Investigative Journalism'
    },
    {
        img: 'https://res.cloudinary.com/dg9itycrz/image/upload/v1710866536/pexels-ron-lach-8102677_fgxzsw.jpg',
        course: 'Feature Editing'
    },
    {
        img: 'https://res.cloudinary.com/dg9itycrz/image/upload/v1710866458/pexels-pixabay-248547_o3pvnn.jpg',
        course: 'Sports Journalism'
    },
    {
        img: 'https://res.cloudinary.com/dg9itycrz/image/upload/v1710866420/pexels-pietro-jeng-65128_sdycyj.jpg',
        course: 'Entertainment Journalism'
    },
    {
        img: 'https://res.cloudinary.com/dg9itycrz/image/upload/v1710866537/pexels-julian-v-860227_m3oido.jpg',
        course: 'Business and Financial Journalism'
    }
]

const Home = () => {
    return (
        <div>
            <Header />
            <div className='container'>

                <div className='carousel-container'>
                    <Carousel className='car' showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={1000}>
                        <div>
                            <img className='cPic' src='https://res.cloudinary.com/dg9itycrz/image/upload/v1710853173/pexels-suzy-hazelwood-3604571_imrvj3.jpg' alt="Slide 1" />
                        </div>
                        <div>
                            <img className='cPic' src='https://res.cloudinary.com/dg9itycrz/image/upload/v1710853160/pexels-nittygritty-photo-5061702_vjw1gk.jpg' alt="Slide 2" />
                        </div>
                        <div>
                            <img className='cPic' src='https://res.cloudinary.com/dg9itycrz/image/upload/v1710853171/pexels-ron-lach-9757551_uax4y3.jpg' alt="Slide 3" />
                        </div>
                    </Carousel>
                </div>
                <div className='coursesContainer'>
                    <h1 className='h'>COURSES OFFERED</h1>
                    <div className='courses'>
                        {data.map(item => (
                            <Courses item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
