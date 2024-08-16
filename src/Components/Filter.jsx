import { Scrollbars } from 'rc-scrollbars';

const Filter = () => {
    return (
        <Scrollbars
            autoHeight
            autoHeightMin={0}
            autoHeightMax={450}
            style={{ width: 220 }}>
            
            <div className="form-control space-y-4  pr-4">
                {/* Brand Name Filter */}
                <div>
                    <h2 className="text-lg font-semibold">Brand Name</h2>
                    <ul>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text capitalize ">Samsung</span>
                                <input type="radio" name="brand" value="Samsung" className="radio max-lg:radio-error " />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize ">Apple</span>
                                <input type="radio" name="brand" value="Apple" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Sony</span>
                                <input type="radio" name="brand" value="Sony" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">one plus</span>
                                <input type="radio" name="brand" value="lg" className="radio max-lg:radio-error" />
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
                                <span className="label-text  capitalize">Smartphones</span>
                                <input type="radio" name="category" value="Smartphones" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Laptops</span>
                                <input type="radio" name="category" value="Laptops" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Televisions</span>
                                <input type="radio" name="category" value="Televisions" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Headphones</span>
                                <input type="radio" name="category" value="Headphones" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Smartwatches</span>
                                <input type="radio" name="category" value="Smartwatches" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                    </ul>
                </div>

                {/* Price Range Filter */}
                <div>
                    <h2 className="text-lg font-semibold">Price Range</h2>
                    <ul>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Under $50</span>
                                <input type="radio" name="price" value="Under $50" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">$50 - $100</span>
                                <input type="radio" name="price" value="$50 - $100" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                        <li>
                            <label className="label cursor-pointer">
                                <span className="label-text  capitalize">Above $100</span>
                                <input type="radio" name="price" value="Above $100" className="radio max-lg:radio-error" />
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </Scrollbars>
    );
};

export default Filter;
