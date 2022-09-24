import React from 'react';
import { BsArrowRight} from 'react-icons/bs';
import mentalhealth from '../../../assets/mentalhealth.png'
import relationship from '../../../assets/relationship.png'
import conflicting from '../../../assets/conflicting.png'
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className='bg-[#F4FCFA] py-[65px]'>
            <div className='w-[88%] mx-auto'>
                <div className='text-center lg:w-1/2 mx-auto'>
                    <h2 className='capitalize text-3xl font-bold'>What we are offer</h2>
                    <p className='mt-6 lg:w-4/6 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione est sapiente porro accusamus aut eius, accusantium dicta non officia?</p>
                </div>

                {/* services cards */}
                <div className='py-12 lg:w-[80%] mx-auto lg:flex gap-6'>
                    <div class="shadow p-8">
                        <figure class="">
                            <img src={mentalhealth} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="">
                            <h2 class="text-left mt-4 mb-3 font-bold text-xl">Depression Therapy</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aut!</p>
                            <Link to='' className='text-primary mt-3 font-medium items-center flex gap-2 hover:gap-3'> <span>learn more</span><BsArrowRight className='mt-[4px] '/></Link>
                        </div>
                    </div>
                    <div class="shadow mt-6 lg:mt-0 p-8">
                        <figure class="">
                            <img src={conflicting} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="">
                            <h2 class="text-left mt-4 mb-3 font-bold text-xl">Couple Counseling</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aut!</p>
                            <Link to='' className='text-primary mt-3 font-medium items-center flex gap-2 hover:gap-3'> <span>learn more</span><BsArrowRight className='mt-[4px] '/></Link>
                        </div>
                    </div>
                    <div class="shadow mt-6 lg:mt-0 p-8">
                        <figure class="">
                            <img src={relationship} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="">
                            <h2 class="text-left mt-4 mb-3 font-bold text-xl">Relationships</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aut!</p>
                            <Link to='' className='text-primary mt-3 font-medium items-center flex gap-2 hover:gap-3'> <span>learn more</span><BsArrowRight className='mt-[4px] '/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;