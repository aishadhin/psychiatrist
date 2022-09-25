import React from 'react';
import about from '../../assets/about_banner.png'
import CountUp from 'react-countup';
import Reviews from '../Home/Reviews/Reviews';

const About = () => {
    return (
        <div className='bg-white'>
            <div className='bg-primary pt-[120px] pb-[165px]'>
                <h1 className='lg:text-[42px] mt-5 lg:mt-0 text-[22px] lg:leading-[60px] font-bold capitalize text-center text-white'>About</h1>
            </div>
            <div class="w-[88%] pb-16 mx-auto">
                <div className='lg:w-1/2 mx-auto'>
                    <img className='mt-[-100px]' src={about} alt="" />
                    <p className='lg:mt-16 mt-3'>
                        <span className='text-primary text-xl font-medium'>Dr. Marry Stone</span> is a experienced psychiatrist who can prescribe the medication to mitigatethe symptoms of your mental illness. At the same time, she supports your progress through talk therapy that unravels the mystery of your issues. Add compassion and dedication, and you’ve got Dr. Marry Stone.

                        Since 1998, Dr. Marry Stone has developed a wealth of knowledge and experience in psychiatric medicine. She is now the best online psychiatrist serving New York, New Jersey and Florida through Midtown Applied Medicine. Dr. Marry Stone accepts evening and weekend appointments to accommodate your busy schedule and enjoys nothing more than seeing you reach your full potential.

                        Dr. Marry Stone treats you with respect and dignity in a confidential session. She also makes you feel valued and appreciated because his focus is on you and helping you work through the issues at hand. As one client put it:
                    </p>
                    {/* hero section counter  */}
                    <div className='mt-12 mx-auto justify-between flex gap-16'>
                        <div>
                            <h3>
                                <CountUp end={20} suffix={'+'} duration={2} className='text-secondary lg:text-5xl font-bold' />
                            </h3>
                            <p className='mt-2 font-medium capitalize'>Years Of <br /> Experience</p>
                        </div>
                        <div>
                            <h3>
                                <CountUp end={840} suffix={'+'} duration={2} className='text-secondary lg:text-5xl font-bold' />
                            </h3>
                            <p className='mt-2 font-medium capitalize'>Patients <br />this year</p>
                        </div>
                        <div>
                            <h3>
                                <CountUp end={98} suffix={'%'} duration={2} className='text-secondary lg:text-5xl font-bold' />
                            </h3>
                            <p className='mt-2 font-medium capitalize'>improved <br />condition</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16'>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default About;