import React from 'react';
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';

const Contact = () => {
    return (
        <div className='bg-white'>
            <div className='bg-primary pt-[120px] pb-[165px]'>
                <h1 className='lg:text-[42px] mt-5 lg:mt-0 text-[22px] lg:leading-[60px] font-bold capitalize text-center text-white'>Contact</h1>
            </div>
            <div class="w-[88%] pb-16 mx-auto">
                <div className='lg:w-2/3 bg-white shadow p-10 lg:flex mx-auto mt-[-100px]'>
                    <div className='w-2/5 flex flex-col self-center'>

                        {/* contact details */}
                        <div className=''>
                            <p className='flex items-center gap-2'>
                                <BsFillTelephoneFill className='text-secondary' /><span className='font-medium text-[16px] capitalize'>+1 202-918-2132</span>
                            </p>
                            <p className='mt-3 flex items-center gap-2'>
                                <BsEnvelopeFill className='text-secondary' /><span className='font-medium text-[16px]'>demo@email.com</span>
                            </p>
                            <p className='mt-3 flex items-center gap-2'>
                                <IoLogoWhatsapp className='text-secondary' /><span className='font-medium text-[16px] capitalize'>+880 1234567890</span>
                            </p>
                            <p className='mt-3 flex items-center gap-2'>
                                <IoLocationSharp className='text-secondary' /><span className='font-medium text-[16px] capitalize'>Vineyard, New York</span>
                            </p>
                        </div>
                    </div>
                    <div className='w-3/5'>

                        {/* contact form */}
                        <form>
                            <input type="text" placeholder='Your Name' name='name' required className="input w-full rounded-sm" />
                            <input type="email" placeholder='Your Email' name='email' required className="input w-full mt-2 rounded-sm" />
                            <textarea name='msg' placeholder='Your Message' className="input w-full h-28 mt-2 rounded-sm" ></textarea>
                            <input type="submit" value='Send' className='bg-primary py-2 px-4 hover:bg-white hover:text-primary border hover:border-primary rounded-sm text-white w-full cursor-pointer font-medium'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;