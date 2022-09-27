import React from 'react';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../../assets/newLogo2.png'

const Footer = () => {
    return (
        <div className='bg-primary py-[35px]'>
            <footer class="w-[88%] mx-auto justify-between lg:flex items-center">
                <div className='justify-center lg:justify-start'>
                    <img className='w-3/5 mx-auto lg:mx-0' src={logo} alt="" />
                </div>
                <div className=' flex justify-between'>
                    <Link to='/' className='text-white lg:px-4 py-2 font-bold'>Home</Link>
                    <Link to='/about' className='text-white lg:px-4 py-2 font-bold'>About</Link>
                    <Link to='/' className='text-white lg:px-4 py-2 font-bold'>Program</Link>
                    <Link to='/' className='text-white lg:px-4 py-2 font-bold'>Blog</Link>
                    <Link to='/' className='text-white lg:px-4 py-2 font-bold'>Gallery</Link>
                    <Link to='/contact' className='text-white lg:px-4 py-2 font-bold'>Contact</Link>
                </div>
                <div className='flex mt-2 lg:mt-0 lg:justify-between justify-center'>
                    <Link to='#' className='px-2 lg:px-1'><MdFacebook className='text-white text-2xl' /></Link>
                    <Link to='#' className='px-2 lg:px-1'><AiFillInstagram className='text-white text-2xl ' /></Link>
                    <Link to='#' className='px-2 lg:px-1'><AiFillTwitterCircle className='text-white text-2xl' /></Link>
                    <Link to='#' className='px-2 lg:px-1'><IoLogoWhatsapp className='text-white text-2xl' /></Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;