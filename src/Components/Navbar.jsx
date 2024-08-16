import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/GH.png'

const Navbar = () => {
    
    return (
        <div className="flex justify-between lg:justify-end gap-2 border-b-2 py-2 lg:pr-3">
            <label htmlFor="my-drawer-2" className="btn btn-ghost text-3xl drawer-button  ">
                <IoMdMenu className='lg:hidden'/>
                <img src={logoImg} className='w-12' />
            </label>
            <div className="form-control max-sm:w-36">
                <input type="text" placeholder="Search" className="input input-bordered w-96  max-md:w-auto rounded-full" />
            </div>
            <NavLink to={'/login'}>
                <button className="btn btn-outline">Login</button>
            </NavLink>
            {/* <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div> */}
        </div>
    );
};

export default Navbar;