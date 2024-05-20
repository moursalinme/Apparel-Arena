import { Rating, Star } from '@smastrom/react-rating';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoBagAddOutline } from "react-icons/io5";
import demo from '../../assets/bestSellers/sports-5.jpg'
import demo2 from '../../assets/bestSellers/shoe2.png'
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ data }) => {
    const navigate = useNavigate();
    const ratingStyle = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    const { id, category, imageUrls, name, price, priceAfterDiscount, rating } = data || {}

    // console.log(imageUrls)
    // console.log(data.data)
    return (
        <div className="w-full border rounded-md shadow p-4 group relative">
            <div className='w-full h-[200px] relative'>
                <img className='w-full h-full object-cover group-hover:hidden' src={imageUrls?.length === 0 ? demo : imageUrls[0]} alt="" />
                <img className='w-full h-full object-cover hidden group-hover:block absolute inset-0' src={imageUrls?.length === 0 ? demo : imageUrls[1]} alt="" />
            </div>
            <div className='pt-4 space-y-1'>
                <p className='font-medium text-arena-color text-sm'>{category}</p>
                <p className='text-gray-400'>{name}</p>
                <Rating style={{ maxWidth: 100 }} readOnly value={rating} itemStyles={ratingStyle} />
                <div className='text-gray-700 space-x-4'>
                    <span className='font-semibold'>${parseFloat(priceAfterDiscount).toFixed(2)}</span>
                    <span className='text-sm'><del>${parseFloat(price).toFixed(2)}</del></span>
                </div>
            </div>
            <div className='absolute top-0 right-0 opacity-0  group-hover:top-4 group-hover:right-2 group-hover:opacity-100 duration-200 space-y-3'>
                <div className='w-8 shadow border-arena-color h-8 p-1 border rounded-md bg-white flex justify-center items-center hover:bg-arena-color cursor-pointer hover:text-white duration-150 text-gray-600'>
                    <CiHeart size={27} />
                </div>
                <div onClick={() => navigate(`/product/${id}`)} className='w-8 border-arena-color shadow h-8 p-1 border bg-white rounded-md flex justify-center items-center hover:bg-arena-color cursor-pointer hover:text-white duration-150 text-gray-600'>
                    <IoEyeOutline size={27} />
                </div>
                <div className='w-8 border-arena-color shadow p-1 h-8 border bg-white rounded-md flex justify-center items-center hover:bg-arena-color cursor-pointer hover:text-white duration-150 text-gray-600'>
                    <IoBagAddOutline size={27} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;