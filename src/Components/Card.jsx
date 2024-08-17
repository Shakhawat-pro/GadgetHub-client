import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';
const Card = ({ product }) => {
    const {_id, name, image, description, price, category, brand, ratings, createdAt } = product
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/productDetail/${_id}`)
    }
    

    return (
        <div onClick={handleClick} className="card bg-base-100 w-80 shadow-2xl mx-auto transform transition-transform hover:scale-105 cursor-pointer hover:border-2 border-black">
            <figure className="px-10 pt-10 h-2/3 ">
                <img src={image} alt="Shoes" className='rounded-xl object-contain h-full w-full' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm'>{description}</p>
                <h1 className='font-bold'>${price}</h1>
                <Rating style={{ maxWidth: 150 }} value={ratings} readOnly/>
                {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Card;