import userAvater from '../../assets/user.png'
import { FaQuoteLeft } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { TiArrowBackOutline } from "react-icons/ti";
import addsImage from '../../assets/Home/banner-3.jpg'
const HomeTestimonial = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='xl:col-span-3 xl:order-none order-1 md:col-span-6 col-span-full'>
                <div>
                    <p className="text-xl font-semibold pb-2 border-b">TESTIMONIAL</p>
                    <div className='flex flex-col justify-center items-center p-5 border shadow rounded-md mt-5 space-y-2'>
                        <img className="w-16 h-16 rounded-full" src={userAvater} alt="" />
                        <p className='text-lg font-semibold text-gray-500'>DEVELOPER</p>
                        <p className='text-gray-500'>CEO & Founder Invision</p>
                        <p className='text-arena-color'>
                            <FaQuoteLeft size={40} />
                        </p>
                        <p className='text-sm text-gray-400 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae officia consequuntur nesciunt quasi vero impedit quos magnam beatae, provident non.</p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-6 col-span-12'>
                <img className='w-full object-cover rounded-md h-full' src={addsImage} alt="" />
            </div>
            <div className='xl:col-span-3 md:col-span-6 col-span-full'>
                <div>
                    <p className="text-xl font-semibold pb-2 border-b">OUR SERVICES</p>
                    <div className='p-5 border shadow rounded-md mt-5 space-y-3'>
                        {/* 1 */}
                       <div className='flex gap-3 items-center group cursor-pointer'>
                        <span className='text-arena-color group-hover:text-gray-600 duration-150'>
                            <BiWorld size={30} />
                        </span>
                        <div className='text-gray-500'>
                            <p className='font-medium'>World Wide Delivery</p>
                            <p className='text-sm'>For Oder Over $100</p>
                        </div>
                       </div>
                       {/* 2 */}
                       <div className='flex gap-3 items-center group cursor-pointer'>
                        <span className='text-arena-color group-hover:text-gray-600 duration-150'>
                            <BsTelephone size={30} />
                        </span>
                        <div className='text-gray-500'>
                            <p className='font-medium'>Best Online Support</p>
                            <p className='text-sm'>8am - 12pm</p>
                        </div>
                       </div>
                       {/* 3 */}
                       <div className='flex gap-3 items-center group cursor-pointer'>
                        <span className='text-arena-color group-hover:text-gray-600 duration-150'>
                            <TiArrowBackOutline size={30} />
                        </span>
                        <div className='text-gray-500'>
                            <p className='font-medium'>Return Policy</p>
                            <p className='text-sm'>Easy & Free Return</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTestimonial;