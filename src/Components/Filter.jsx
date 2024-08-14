import Navbar from "./Navbar";

const Filter = () => {
    return (
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar></Navbar>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side border-r-[1px] border-black ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay  "></label>
                    <h1>GadgetHub</h1>
                    <ul className="menu text-base-content w-60 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
    );
};

export default Filter;