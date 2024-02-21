import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Receipe1 from "../assests/rec1.jpg";
import Receipe2 from "../assests/rec2.jpg"
import Receipe3 from "../assests/rec3.jpg"
import Receipe4 from "../assests/rec4.jpg"
import Receipe5 from "../assests/rec5.jpg"
import Receipe6 from "../assests/rec6.jpg"
import "./Reciepes.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='text-center' style={{
      marginBottom:"7rem"
    }}>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Receipe1} alt='Rceipes' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Receipe2} alt='Rceipes'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Receipe3} alt='Rceipes'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Receipe4} alt='Rceipes'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Receipe5} alt='Rceipes'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Receipe6} alt='Rceipes'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
