import React, { useContext } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/GH.png'
import { authContext } from '../Context/AuthProvider';
import { FilterContext } from '../Context/FilterProvider';

const Navbar = () => {
    const { user, logOut } = useContext(authContext)
    const { setSearch } = useContext(FilterContext)

    const handleSearchChange = (e) => {
        setSearch(e.target.value); // Update search term in context
    };


    return (
        <div className="flex justify-between lg:justify-end gap-2 border-b-2 py-2 lg:pr-3">
            <div className='flex items-center'>
                <label htmlFor="my-drawer-2" className="btn btn-ghost text-3xl drawer-button  lg:hidden">
                    <IoMdMenu className='' />
                </label>
                <Link to={'/'}>
                    <img src={logoImg} className='w-12 transform transition-transform hover:scale-110 hover:cursor-pointer' />
                </Link>
            </div>
            <div className="form-control max-sm:w-36">
                <input type="text" onChange={handleSearchChange} placeholder="Search" className="input input-bordered w-96  max-md:w-auto rounded-full" />
            </div>

            {user ?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li onClick={logOut}><a>Logout</a></li>
                    </ul>
                </div> :
                <NavLink to={'/login'}>
                    <button className="btn btn-outline">Login</button>
                </NavLink>
            }
        </div>
    );
};

export default Navbar;