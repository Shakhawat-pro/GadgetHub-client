import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import Filter from "./Filter";

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Navbar></Navbar>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="px-12 text-xl space-y-4 w-80 min-h-full border-r-2  max-lg:bg-black max-lg:text-white">
                    <div className="flex flex-col items-center -space-y-1 pt-12 pb-10 cinzel ">
                        <p className="text-3xl tracking-[.3rem] font-extrabold permanent">GadgetHub</p>
                    </div>
                    <Filter></Filter>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;