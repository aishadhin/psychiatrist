import React from 'react';
import { BsCheckCircle, BsDashLg } from 'react-icons/bs';
import doctor from '../../../assets/doctor_about.png'

const SmallAbout = () => {
    return (
        <div className='bg-white py-[65px]'>
            <div class="w-[88%] mx-auto">
                <div class="flex-col flex lg:flex-row-reverse">
                    <img src={doctor} class="lg:w-4/6" alt='' />
                    <div className='lg:w-4/5'>
                        <h1 class="lg:text-[36px] mt-5 lg:mt-0 text-[20px] lg:leading-[50px] font-bold capitalize"><span className='text-primary flex items-center gap-4'>Doctor Marry stone <BsDashLg className='mt-3 text-accent' /></span>licensed mental health counselor, psychotherapist</h1>
                        <p className='lg:mr-[200px] mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum voluptate, ut velit earum iure nulla eos corporis. Fugit, deserunt!</p>

                        <div className='mt-10 grid justify-between grid-cols-2 lg:gap-x-10 gap-y-2'>
                            <p className='flex items-center gap-2'>
                                <BsCheckCircle className='text-secondary' /><span className='font-medium text-[18px] capitalize'>personal consultation</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckCircle className='text-secondary' /><span className='font-medium text-[18px] capitalize'>Unique Technique</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckCircle className='text-secondary' /><span className='font-medium text-[18px] capitalize'>Group Therapy</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckCircle className='text-secondary' /><span className='font-medium text-[18px] capitalize'>Couple Problem</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckCircle className='text-secondary' /><span className='font-medium text-[18px] capitalize'>Online Therapy</span>
                            </p>
                        </div>
                        <button class="bg-primary mt-10 py-2 px-6 hover:bg-white hover:text-primary border hover:border-primary rounded-full text-white font-medium">Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallAbout;