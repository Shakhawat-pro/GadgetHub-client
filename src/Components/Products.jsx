import axios from "axios";
import { useState, useContext } from "react";
import Card from "./Card";
import Lottie from "lottie-react";
import lol from '../assets/lol.json';
import { FilterContext } from "../Context/FilterProvider";
import { useQuery } from '@tanstack/react-query';

const Products = () => {
    const { filters, Search } = useContext(FilterContext);
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);  
    const [itemsPerPage, setItemsPerPage] = useState(10); 

    const { data = {}, isLoading } = useQuery({
        queryKey: ['products', filters, Search, sort, currentPage, itemsPerPage],
        queryFn: async () => {
            const params = new URLSearchParams({
                ...filters,
                search: Search,
                sort,
                page: currentPage,
                limit: itemsPerPage
            });
            const res = await axios.get(`http://localhost:5000/product?${params}`);
            return res.data;
        },
        keepPreviousData: true,
    });

    const { products = [], totalPages } = data;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (isLoading) {
        return <div className="w-80 mx-auto mt-14"><Lottie animationData={lol}></Lottie></div>;
    }

    return (
        <div className="my-10">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-semibold">Hi, Ratul!</h1>
                    <h1 className="">Find Your Favorite Products</h1>
                </div>
                <div>
                    <select
                        className="select select-bordered border-black w-full max-w-xs"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="" disabled>Select Sorting</option>
                        <option value="priceLowHigh">Price: Low - High</option>
                        <option value="priceHighLow">Price: High - Low</option>
                        <option value="dateNewest">Date Added: Newest first</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-7 my-10">
                {products.map((product) => <Card key={product._id} product={product}></Card>)}
            </div>

            <div className="flex justify-center space-x-2 mt-8">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="btn btn-outline">
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="btn btn-outline">
                    Next
                </button>
                
            </div>
        </div>
    );
};

export default Products;
