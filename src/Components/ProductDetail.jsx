import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'

const ProductDetail = () => {
    const item = useLoaderData()
    console.log(item);

    return (
        <div className="flex flex-col md:flex-row gap-5 my-16 items-center max-w-screen-lg mx-auto" >
            <figure className=" lg:w-1/2 h-96 ">
                <img src={item.image} alt="Album" className="object-contain h-full " />
            </figure>
            <div className="space-y-2">
                <h2 className="text-3xl font-bold mb-6">{item.name}</h2>
                <p>{item.description}</p>
                <p><span className="font-bold">Category:</span> {item.category}</p>
                <p><span className="font-bold">Brand:</span> {item.brand}</p>
                <p><span className="font-bold">Price:</span> <span className="text-red-500">${item.price}</span></p>
                <Rating style={{ maxWidth: 150 }} value={item.ratings} readOnly/>
            </div>
        </div>
    );
};

export default ProductDetail;