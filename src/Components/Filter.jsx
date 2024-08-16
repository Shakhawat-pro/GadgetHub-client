import { useContext, useState } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { FilterContext } from '../Context/FilterProvider';

const Filter = () => {
    // Initialize state for filters
    const {filters, setFilters} = useContext(FilterContext)
    // const [filters, setFilters] = useState({
    //     brand: '',
    //     category: '',
    //     priceMin: '',
    //     priceMax: ''
    // });
    // console.log(filters);
    
    

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters, [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Filters:', filters);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Scrollbars
                autoHeight
                autoHeightMin={0}
                autoHeightMax={450}
                style={{ width: 220 }}
            >
                <div className="form-control space-y-4 pr-4">
                    {/* Brand Name Filter */}
                    <div>
                        <h2 className="text-lg font-semibold">Brand Name</h2>
                        <ul>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Samsung</span>
                                    <input
                                        type="radio"
                                        name="brand"
                                        value="Samsung"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Apple</span>
                                    <input
                                        type="radio"
                                        name="brand"
                                        value="Apple"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Sony</span>
                                    <input
                                        type="radio"
                                        name="brand"
                                        value="Sony"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">One Plus</span>
                                    <input
                                        type="radio"
                                        name="brand"
                                        value="One Plus"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Category Name Filter */}
                    <div>
                        <h2 className="text-lg font-semibold">Category Name</h2>
                        <ul>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Smartphones</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Smartphones"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Laptops</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Laptops"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Televisions</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Televisions"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Headphones</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Headphones"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer">
                                    <span className="label-text capitalize">Smartwatches</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Smartwatches"
                                        className="radio max-lg:radio-error"
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Price Range Filter */}
                    <div className='space-y-3'>
                        <h2 className="text-lg font-semibold">Price Range</h2>
                        <div className='space-y-3'>
                            <div>
                                <input
                                    type="number"
                                    id="priceMin"
                                    name="priceMin"
                                    placeholder="Min Price"
                                    className="input input-bordered w-full max-w-xs"
                                    // value={filters.price.min}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    id="priceMax"
                                    name="priceMax"
                                    placeholder="Max Price"
                                    className="input input-bordered w-full max-w-xs"
                                    // value={filters.price.max}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Scrollbars>
            <button type="submit" className="btn bg-black text-white mt-4">Apply Filters</button>
        </form>
    );
};

export default Filter;
