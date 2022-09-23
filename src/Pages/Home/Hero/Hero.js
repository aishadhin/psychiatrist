import React from 'react';
import heroImage from '../../../assets/psy-hero.jpg'

const Hero = () => {
    return (
        <div className='bg-white pt-[120px] pb-[65px]'>
            <div class="w-[88%] mx-auto">
                <div class="flex justify-between">
                    <div className='w-1/2'>
                        <h1 class="lg:text-[42px] leading-[60px] font-bold capitalize">Private mental health consultation from a professional</h1>
                        <p class="py-6 w-3/4 text-[#293039]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                        <div className='flex gap-5'>
                            <button class="bg-primary py-2 px-4 hover:bg-white hover:text-primary border hover:border-primary rounded-full text-white font-medium">Get Consultation</button>
                            <button class="hover:bg-primary py-2 px-4 bg-white text-primary border border-primary rounded-full hover:text-white font-medium">Learn More</button>
                        </div>
                    </div>
                    <img src={heroImage} class="" alt='psychiatrist banner' />
                </div>
            </div>
        </div>
    );
};

export default Hero;