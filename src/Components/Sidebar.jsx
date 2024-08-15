import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Navbar></Navbar>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="px-12 text-xl space-y-4 w-80 min-h-full border-r-2  max-lg:bg-black max-lg:text-white">
                    <div className="flex flex-col items-center -space-y-1 pt-12 pb-10 cinzel ">
                        <p className="text-3xl tracking-[.3rem] font-extrabold permanent">GadgetHub</p>
                    </div>
    
                </ul>
            </div>


            {/* <div className="drawer-side   border-r-[1px] border-black">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay  "></label>
                <div className="mt-1 bg-white">
                    <a className=" text-4xl font-bold ">GadgetHub</a>
                </div>
                <ul className="menu bg-white text-base-content lg:w-60 p-4 mt-20">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div> */}
        </div>
    );
};

export default Sidebar;