import React from 'react';
import Faq from './Faq/Faq';
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
            <SmallAbout></SmallAbout>
            <Reviews></Reviews>
            <Process></Process>
            <Faq></Faq>
        </div>
    );
};

export default Home;