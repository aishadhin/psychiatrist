import React from 'react';
import contImg from '../../../../src/assets/contact_map.png'
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const SmallContact = () => {
    return (
        <div className='bg-white py-[65px]'>
            <div class="w-[88%] mx-auto">
                <div class="flex-col items-center flex lg:flex-row-reverse">
                    <img src={contImg} class="lg:w-3/6" alt='' />
                    <div className='lg:w-4/5'>
                        <h1 class="lg:text-[36px] mt-5 lg:mt-0 text-[20px] lg:leading-[50px] font-bold capitalize">Contact Info</h1>
                        <p className='lg:mr-[200px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum voluptate, ut velit earum iure nulla eos corporis. Fugit, deserunt!</p>

                        <div className='mt-10 grid justify-between grid-cols-2 lg:gap-x-10 gap-y-4'>
                            <p className='flex items-center gap-2'>
                                <BsFillTelephoneFill className='text-secondary' /><span className='font-medium text-[16px] capitalize'>+1 202-918-2132</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsEnvelopeFill className='text-secondary' /><span className='font-medium text-[16px]'>demo@email.com</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <IoLogoWhatsapp className='text-secondary' /><span className='font-medium text-[16px] capitalize'>+880 1234567890</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <IoLocationSharp className='text-secondary' /><span className='font-medium text-[16px] capitalize'>Vineyard, New York</span>
                            </p>
                        </div>
                        <button class="bg-primary mt-10 py-2 px-6 hover:bg-white hover:text-primary border hover:border-primary rounded-full text-white font-medium">Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallContact;