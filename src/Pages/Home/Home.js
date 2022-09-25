import React from 'react';
import Faq from './Faq/Frequently';
import Hero from './Hero/Hero';
import Offers from './Offers/Offers';
import Reviews from './Reviews/Reviews';
import SmallAbout from './SmallAbout/SmallAbout';
import SmallContact from './SmallContact/SmallContact';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Offers></Offers>
            <SmallAbout></SmallAbout>
            <Reviews></Reviews>
            <Faq></Faq>
            <SmallContact></SmallContact>
        </div>
    );
};

export default Home;