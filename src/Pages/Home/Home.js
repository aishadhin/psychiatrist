import React from 'react';
import Hero from './Hero/Hero';
import Offers from './Offers/Offers';
import Process from './Process/Process';
import Reviews from './Reviews/Reviews';
import SmallAbout from './SmallAbout/SmallAbout';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Offers></Offers>
            <Process></Process>
            <SmallAbout></SmallAbout>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;