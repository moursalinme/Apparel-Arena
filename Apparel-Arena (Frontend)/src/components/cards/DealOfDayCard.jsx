import { Rating, Star } from '@smastrom/react-rating';
import demo from '../../assets/bestSellers/sports-5.jpg'

const DealOfDayCard = () => {
    const ratingStyle = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div className="w-full border shadow rounded-md p-5 xl:p-8 grid lg:grid-cols-2 items-center justify-center gap-5">
            <div className="w-full">
                <img src={demo} className="w-full" alt="" />
            </div>
            <div className='space-y-3'>
                <Rating style={{ maxWidth: 100 }} readOnly value={4} itemStyles={ratingStyle} />
                <p className='text-xl font-semibold text-gray-500'>Shampoo, Conditionar & Fashwash Pack</p>
                <p className='line-clamp-2 text-gray-400 font-light'>Lafz Apple Cider Vinegar Shampoo is a natural shampoo that is formulated with apple cider vinegar and other natural ingredients. It is designed to cleanse and clarify the hair, while also providing nourishment and improving scalp health.</p>
                <div className='text-gray-500 space-x-4'>
                    <span className='font-semibold text-arena-color text-3xl'>$4.00</span>
                    <span className='text-2xl'><del>$10.00</del></span>
                </div>
                <button className='arenaBtn px-5 py-2'>ADD TO CART</button>
                <div>
                    <div className='font-medium text-sm flex justify-between text-gray-500'>
                        <p>ALREADY SOLD: 20</p>
                        <p>AVAILABLE: 40</p>
                    </div>
                    <div className='w-full border border-dotted border-gray-400 bg-gray-200 rounded-full p-[1px] mt-2'>
                        <div className='w-[50%] h-2 bg-arena-color rounded-full'></div>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-sm'>OFFER END IN: </p>
                    <div className='flex gap-4 text-gray-500 mt-2'>
                        <div className=' bg-gray-200 w-20 rounded-md flex flex-col justify-center items-center p-1'>
                            <p className='xl:text-3xl font-bold text-xl'>2</p>
                            <p className='text-gray-500 font-medium'>DAYS</p>
                        </div>
                        <div className=' bg-gray-200 w-20 rounded-md flex flex-col justify-center items-center p-1'>
                            <p className='xl:text-3xl font-bold text-xl'>12</p>
                            <p className='text-gray-500 font-medium'>HOURS</p>
                        </div>
                        <div className=' bg-gray-200 w-20 rounded-md flex flex-col justify-center items-center p-1'>
                            <p className='xl:text-3xl font-bold text-xl'>30</p>
                            <p className='text-gray-500 font-medium'>MINUTES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfDayCard;