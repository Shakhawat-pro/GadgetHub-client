import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {location.pathname === ('/login' || '/register') ? '' : <Navbar></Navbar>}

                <div className="max-w-screen-xl w-11/12 mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
            {location.pathname === ('/login' || '/register') ? '' :
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="px-12 text-xl space-y-4 w-80 min-h-full border-r-2  max-lg:bg-black max-lg:text-white ">
                        <div className="flex flex-col items-center -space-y-1 pt-7 pb-10 cinzel ">
                            <NavLink to={'/'} className="text-3xl tracking-[.3rem] font-extrabold permanent btn btn-ghost">GadgetHub</NavLink>
                        </div>
                        <Filter></Filter>
                    </div>
                </div>}
        </div>
    );
};

export default Sidebar;