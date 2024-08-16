import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import Lottie from "lottie-react";
import lol from '../assets/lol.json'

const Products = () => {
    const [products, setProducts] = useState([]); // State to store fetched products
    const [loading, setLoading] = useState(true); // State to track loading status

    useEffect(() => {
        axios.get('data.json')
            .then(response => {
                setProducts(response.data); 
                setLoading(false); 
            })
    }, []);

    if (loading) {
        return <div className="w-80 mx-auto mt-14"><Lottie animationData={lol}></Lottie></div>; 
    }
    return (
        <div className="my-10">
            <h1 className="text-2xl font-semibold">Hi, Ratul!</h1>
            <h1 className="">Find Your Favorite Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-7 my-10">
                {products.map((product, index) => <Card key={index +1} product={product}></Card>)}
            </div>
        </div>
    );
};

export default Products;
