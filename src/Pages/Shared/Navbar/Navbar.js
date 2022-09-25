import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/newLogo.png'
import auth from '../../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><Link className='font-medium' to="/">Home</Link></li>
        <li><Link className='font-medium' to="/Appointment">Appointment</Link></li>
        <li><Link className='font-medium' to="/Reviews">Reviews</Link></li>
        <li><Link className='font-medium' to="/AboutUs">About</Link></li>
        <li><Link className='font-medium' to="/ContactUs">Contact</Link></li>
        {
            user && <li><Link className='font-medium' to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className='font-medium' onClick={logout} to="/Login">Sign Out</button> : <Link className='font-medium' to="/Login">Login</Link>}</li>
    </>
    return (
        <div className='bg-white fixed w-full z-10 shadow top-0'>
            <div class="navbar justify-between container mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' class=""><img className='lg:w-1/2' src={logo} alt="" /></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;