import React from 'react';
import Faq from 'react-faq-component';
import faq from '../../../assets/faq-side.png'

const Frequently = () => {

    const data = {
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: "Lorem ipsum dolor sit amet, consectetur "
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
            },
            {
                title: "What is the package version",
                content: "v1.0.5"
            }]
    }

    return (
        <div className='bg-white py-[65px]'>
            <div class="w-[88%] mx-auto lg:flex items-center gap-5 justify-between">
                <div className='lg:w-1/2'>
                    <img src={faq} class="" alt='' />
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='capitalize text-xl mt-16 lg:mt-0 lg:text-3xl font-bold lg:leading-[50px]'>the most popular question to discuss mental health</h2>
                    <div className='mt-4 lg:mt-15'>
                        <Faq data={data} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Frequently;