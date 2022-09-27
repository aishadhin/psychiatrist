import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-white pt-[120px] pb-[65px]'>
            <div class="w-[88%] mx-auto">
                <h1 className='text-7xl text-center font-black'>404</h1>
                <h3 className='uppercase my-4 text-secondary font-semibold text-center text-3xl'>page not found</h3>
                <p className='capitalize text-center'>The page you are looking for might have been removed had its<br />  name changed or is temporarily unavailable</p>
                <div className='w-full flex justify-center'>
                    <Link to='/' className='bg-primary mt-4 inline-block py-2 px-4 hover:bg-white hover:text-primary border hover:border-primary rounded-sm text-white cursor-pointer font-medium'>Go To Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;