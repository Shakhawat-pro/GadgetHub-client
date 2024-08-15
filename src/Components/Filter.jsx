const Filter = () => {
    return (
        <div className="form-control space-y-4">
            {/* Brand Name Filter */}
            <div>
                <h2 className="text-lg font-semibold">Brand Name</h2>
                <ul>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">Brand A</span>
                            <input type="radio" name="brand" value="Brand A" className="radio" />
                        </label>
                    </li>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">Brand B</span>
                            <input type="radio" name="brand" value="Brand B" className="radio" />
                        </label>
                    </li>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">Brand C</span>
                            <input type="radio" name="brand" value="Brand C" className="radio" />
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
                            <span className="label-text">Electronics</span>
                            <input type="radio" name="category" value="Electronics" className="radio" />
                        </label>
                    </li>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">Furniture</span>
                            <input type="radio" name="category" value="Furniture" className="radio" />
                        </label>
                    </li>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">Clothing</span>
                            <input type="radio" name="category" value="Clothing" className="radio" />
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
                            <span className="label-text">Under $50</span>
                            <input type="radio" name="price" value="Under $50" className="radio" />
                        </label>
                    </li>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">$50 - $100</span>
                            <input type="radio" name="price" value="$50 - $100" className="radio" />
                        </label>
                    </li>
                    <li>
                        <label className="label cursor-pointer">
                            <span className="label-text">Above $100</span>
                            <input type="radio" name="price" value="Above $100" className="radio" />
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;
