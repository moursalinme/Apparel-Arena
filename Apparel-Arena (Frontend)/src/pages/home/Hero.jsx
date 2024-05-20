import banner1 from '../../assets/Home/banner-1.jpg'
import banner2 from '../../assets/Home/banner-2.jpg'
import banner3 from '../../assets/Home/banner-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';

const Hero = () => {
    return (
        <div className='h-[450px] my-2'>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full rounded-md h-full relative'>
                        <img className='w-full rounded-md h-[450px] object-cover' src={banner1} alt="" />
                        <div className='absolute top-1/2 left-10 -translate-y-1/2 space-y-2 xl:left-20'>
                            <p className='text-[24px] font-medium text-arena-color'>TRENDING ITEMS</p>
                            <p className='font-bold text-[50px] text-arena-color-hover leading-tight'>MENS LATEST <br /> FASION SALE</p>
                            <p className='text-[24px] font-medium text-arena-color'>Starting At & Doller : 20.00</p>
                            <button className='arenaBtn px-4 py-2 mt-4'>SHOP NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full rounded-md h-full relative'>
                        <img className='w-full rounded-md h-[450px]' src={banner2} alt="" />
                        <div className='absolute top-1/2 left-10 -translate-y-1/2 space-y-2 xl:left-20'>
                            <p className='text-[24px] font-medium text-arena-color'>SOCIAL MEDIA QR CODE</p>
                            <p className='font-bold text-[50px] text-arena-color-hover leading-tight'>GET <br/> MORE OFFER ON <br/> SOCIAL MEDIA</p>

                                <button className='arenaBtn px-4 py-2 mt-4'>SHOP NOW</button>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full rounded-md h-full relative'>
                        <img className='w-full rounded-md h-[450px]' src={banner3} alt="" />
                        <div className='absolute top-1/2 left-10 -translate-y-1/2 space-y-2 xl:left-20'>
                            <p className='text-[24px] font-medium text-arena-color'>SALE OFFER</p>
                            <p className='font-bold text-[50px] text-arena-color-hover leading-tight'>NEW FAISON  <br /> SUMMER SALE</p>
                            <p className='text-[24px] font-medium text-arena-color'>Starting At & Doller : 20.00</p>
                            <button className='arenaBtn px-4 py-2 mt-4'>SHOP NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;