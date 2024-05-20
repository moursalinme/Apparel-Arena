import { Rating, Star } from '@smastrom/react-rating';
import demo from '../../assets/bestSellers/sports-5.jpg'
const BestSellerCard = ({data}) => {
    const ratingStyle = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
      }
    return (
        <div className="w-full flex gap-4 items-center">
            <div className='w-16 h-16 rounded-md border shadow-md flex justify-center items-center'>
                <img src={data.img} className='w-full h-full' alt="" />
            </div>
            <div>
                <p>{data.name}</p>
                <Rating style={{ maxWidth: 80 }} readOnly value={data.rating} itemStyles={ratingStyle}/>
                <div className='text-gray-500 space-x-4'>
                    <span className='text-sm tex'><del>${data.oldPrice?.toFixed(2)}</del></span>
                    <span className='font-semibold'>${data.newPrice?.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default BestSellerCard;