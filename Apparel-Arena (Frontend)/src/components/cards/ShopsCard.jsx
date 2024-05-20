
import { useNavigate } from 'react-router-dom';
import demo from '../../assets/bestSellers/sports-5.jpg'

const ShopsCard = ({ data }) => {
    const navigate = useNavigate();

    console.log(data)

    return (
        <div onClick={() => navigate(`/category/${data?._id}`)} className="w-full cursor-pointer flex gap-4 items-center">
            <div className='w-16 h-16 rounded-md border shadow-md flex justify-center items-center'>
                <img src={data.photo} className='w-full h-full' alt="" />
            </div>
            <div>
                <p>{data.name}</p>

                <div className='text-gray-500 space-x-4'>
                    <p>Sale: {data.productSaleCount}</p>
                </div>
            </div>
        </div>
    );
};

export default ShopsCard;