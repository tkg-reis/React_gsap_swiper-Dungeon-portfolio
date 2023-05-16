import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section_1 = () => {
    return (
        <>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='h-screen w-screen'
            >
            <SwiperSlide
            
            >
            Slide 1
            </SwiperSlide>
            <SwiperSlide>
                Slide 2
            </SwiperSlide>
            <SwiperSlide>
            {({ isActive }) => (
                <div>Current slide is {isActive ? 'active' : 'not active'}</div>
            )}
            </SwiperSlide>
            <SwiperSlide>
                Slide 4</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Section_1