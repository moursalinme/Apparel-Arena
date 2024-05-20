
import { useNavigate } from 'react-router-dom';
import demo from '../../assets/bestSellers/sports-5.jpg'
const TrendingProductCard = ({ data }) => {
    const navigate = useNavigate();
    const { id, category, imageUrls, name, price, priceAfterDiscount, rating } = data || {}

    return (
        <div onClick={() => navigate(`/product/${id}`)} className="border rounded-md shadow p-4 flex gap-5 items-center cursor-pointer">
            <div className="w-16 h-16">
                <img src={imageUrls} className="w-full h-full" alt="" />
            </div>
            <div>
                <p className='font-semibold text-lg line-clamp-1 text-gray-500'>{name}</p>
                <p className="text-gray-500">{category}</p>
                <div className='text-gray-500 space-x-2'>
                    <span className='font-semibold text-arena-color'>${priceAfterDiscount?.toFixed(2)}</span>
                    <span className='text-sm'><del>${price?.toFixed(2)}</del></span>
                </div>
            </div>
        </div>
    );
};

export default TrendingProductCard;