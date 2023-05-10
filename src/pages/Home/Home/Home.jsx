import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div className='lg:container mx-auto'>
            <Banner></Banner>
            <About></About>
            <h3>This is home page.</h3>
        </div>
    );
};

export default Home;