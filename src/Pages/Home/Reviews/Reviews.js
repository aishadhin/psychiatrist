import React from 'react';

const Reviews = () => {
    return (
        <div className='bg-white py-[65px]'>
            <div className='container mx-auto'>
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <div className='text-center lg:w-1/2 mx-auto'>
                            <h2>What we can offer</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione est sapiente porro accusamus aut eius, accusantium dicta non officia?</p>
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <div className='text-center lg:w-1/2 mx-auto'>
                            <h2>What we can offer</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione est sapiente porro accusamus aut eius, accusantium dicta non officia?</p>
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <div className='text-center lg:w-1/2 mx-auto'>
                            <h2>What we can offer</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione est sapiente porro accusamus aut eius, accusantium dicta non officia?</p>
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <div className='text-center lg:w-1/2 mx-auto'>
                            <h2>What we can offer</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione est sapiente porro accusamus aut eius, accusantium dicta non officia?</p>
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;