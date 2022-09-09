import React from 'react';

const Hero = () => {
    return (
        <div className='bg-white pt-[120px] pb-[65px]'>
            <div class="container mx-auto">
                <div class="hero-content justify-between flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" class="rounded-lg shadow" alt=''/>
                    <div className='w-1/2'>
                        <h1 class="lg:text-[60px] leading-[60px] font-bold capitalize"> Your mental health <br/> does matter</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;