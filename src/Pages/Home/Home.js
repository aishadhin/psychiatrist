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
            <Process></Process>
            <SmallAbout></SmallAbout>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;