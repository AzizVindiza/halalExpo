import React from 'react';
import "./PictureSection.sass"
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"

import { Swiper,SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Autoplay} from "swiper";


const PictureSection = () => {
    return (
        <div className={'picture'}>
            <div className="container picture__container">
                <div className="picture__text">Галерея</div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    breakpoints={{
                        1025:{

                            slidesPerView:3
                        },
                        770:{

                            slidesPerView:3

                        }
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    speed={4000}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    freeMode={true}
                    initialSlide={2}
                    modules={[Autoplay]}
                    className="picture__Swiper"
                >
                    <SwiperSlide>
                        <div className="picture__img">
                            <img src={img1} alt=""/>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="picture__img">
                            <img src={img2} alt=""/>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="picture__img">
                            <img src={img3} alt=""/>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="picture__img">
                            <img src={img4} alt=""/>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="picture__img">
                            <img src={img5} alt=""/>
                        </div>

                    </SwiperSlide>


                </Swiper>
            </div>


        </div>
    );
};

export default PictureSection;