import React, {useRef, useState} from 'react';

import './banner.sass'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/effect-creative";
import banner from './banner.png'
import "swiper/css/pagination";
import "swiper/css/navigation";


import {EffectCreative, Navigation,Pagination,Autoplay} from "swiper";




const Banner = () => {



    const [_,setClickBtn] = useState()

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <section className={'banner'}>
            <div className={"banner__container"}>
                <div className="banner__wrapper">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay:10000,
                            disableOnInteraction: false,
                        }}
                        mousewheel={true}
                        pagination={true}
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        modules={[EffectCreative,Navigation,Pagination,Autoplay]}
                        className="mySwiper"
                        navigation={
                            {
                                prevEl:prevRef.current,
                                nextEl:nextRef.current,
                            }
                        }
                        onInit={()=> setClickBtn(true)}

                    >
                        <SwiperSlide className={"banner__slide"}><img src={banner} alt=""/></SwiperSlide>
                        <SwiperSlide className={"banner__slide"}><img src={banner} alt=""/></SwiperSlide>
                        <SwiperSlide className={"banner__slide"}><img src={banner} alt=""/></SwiperSlide>



                    </Swiper>

                        <button  ref={prevRef} className="banner__nav_after">


                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 13.5C23.8284 13.5 24.5 12.8284 24.5 12C24.5 11.1716 23.8284 10.5 23 10.5V13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z" fill="white"/>
                            </svg>

                        </button>
                        <button  ref={nextRef} className="banner__nav_before">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM24.0607 13.0607C24.6464 12.4749 24.6464 11.5251 24.0607 10.9393L14.5147 1.3934C13.9289 0.807611 12.9792 0.807611 12.3934 1.3934C11.8076 1.97919 11.8076 2.92893 12.3934 3.51472L20.8787 12L12.3934 20.4853C11.8076 21.0711 11.8076 22.0208 12.3934 22.6066C12.9792 23.1924 13.9289 23.1924 14.5147 22.6066L24.0607 13.0607ZM2 13.5H23V10.5H2V13.5Z" fill="white"/>
                            </svg>



                        </button>



                </div>
                <div className="banner__border"></div>



            </div>

        </section>
    );
};

export default Banner;