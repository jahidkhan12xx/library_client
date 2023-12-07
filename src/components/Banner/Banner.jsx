
import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCards, EffectCreative } from 'swiper/modules';

import "swiper/swiper-bundle.css"

// import 'swiper/swiper-bundle'


const Banner = () => {
    return (
        <div className=''>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCube,EffectCards, EffectCreative]}
             effect={"cube"}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><div className="relative h-[90vh] bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      {/* Overlay with background color */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="text-6xl absolute z-10 text-white text-center flex flex-col justify-center items-center w-full h-full">
        <h2>Dreamers Library</h2>
        <p className=' text-xl'>Read ,  Learn ,  Progress</p>
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div className="relative h-[90vh] bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549383028-df014fa3a325?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      {/* Overlay with background color */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="text-6xl absolute z-10 text-white text-center flex flex-col justify-center items-center w-full h-full">
        <h2>Choose what you want</h2>
        <p className=' text-xl'>Read ,  Learn ,  Progress</p>
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div className="relative h-[90vh] bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      {/* Overlay with background color */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="text-6xl absolute z-10 text-white text-center flex flex-col justify-center items-center w-full h-full">
        <h2>Read what you want</h2>
        <p className=' text-xl'>Read ,  Learn ,  Progress</p>
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div className="relative h-[90vh] bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      {/* Overlay with background color */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="text-6xl absolute z-10 text-white text-center flex flex-col justify-center items-center w-full h-full">
        <h2>Learn what you want</h2>
        <p className=' text-xl'>Read ,  Learn ,  Progress</p>
        </div>
    </div></SwiperSlide>
        ...
      </Swiper>
        </div>
    );
};

export default Banner;