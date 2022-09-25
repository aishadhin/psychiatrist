import React from 'react';
import Slider from "react-slick";
import ava_1 from '../../../assets/ava_1.png'
import ava_2 from '../../../assets/ava_2.png'
import ava_3 from '../../../assets/ava_3.png'
import ava_4 from '../../../assets/ava_4.png'

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='bg-white lg:py-[65px]'>
            <div className='w-[88%] mx-auto'>
                <div className='text-center lg:w-1/2 mx-auto'>
                    <h2 className='capitalize text-3xl font-bold'>What Patients Says</h2>
                    <p className='mt-3 lg:w-4/6 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className=''>
                    <Slider {...settings} className='flex gap-5'>
                        <div>
                            <div className='mx-auto my-10'>
                                <div className='p-4 lg:m-5 shadow'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores consectetur atque velit amet non quaerat ipsam rem incidunt fugiat illo blanditiis, esse dolores quia animi architecto</p>
                                    <div className='w-[150px] my-6 mx-auto'>
                                        <img className='w-[50px] mx-auto text-center rounded-full border-2 border-primary' src={ava_1} alt="" />
                                        <h4 className='font-semibold text-center text-primary'>John Doe</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' mx-auto my-10'>
                                <div className='p-4 shadow lg:m-5'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores consectetur atque velit amet non quaerat ipsam rem incidunt fugiat illo blanditiis, esse dolores quia animi architecto</p>
                                    <div className='w-[150px] my-6 mx-auto'>
                                        <img className='w-[50px] mx-auto text-center rounded-full border-2 border-primary' src={ava_2} alt="" />
                                        <h4 className='font-semibold text-center text-primary'>Dexter</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' mx-auto my-10'>
                                <div className='p-4 lg:m-5 shadow'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores consectetur atque velit amet non quaerat ipsam rem incidunt fugiat illo blanditiis, esse dolores quia animi architecto</p>
                                    <div className='w-[150px] my-6 mx-auto'>
                                        <img className='w-[50px] mx-auto text-center rounded-full border-2 border-primary' src={ava_3} alt="" />
                                        <h4 className='font-semibold text-center text-primary'>Haris</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' mx-auto my-10'>
                                <div className='p-4 lg:m-5 shadow'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores consectetur atque velit amet non quaerat ipsam rem incidunt fugiat illo blanditiis, esse dolores quia animi architecto</p>
                                    <div className='w-[150px] my-6 mx-auto'>
                                        <img className='w-[50px] mx-auto text-center rounded-full border-2 border-primary' src={ava_4} alt="" />
                                        <h4 className='font-semibold text-center text-primary'>Bella</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;