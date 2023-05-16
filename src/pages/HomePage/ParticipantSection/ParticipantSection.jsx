import React from 'react';
import './ParticipantSection.sass'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
const ParticipantSection = () => {
    return (
        <section className="participant">
            <h2 className="participant__h2">
                Участники
            </h2>
            <div className="participant__container container_fluid">


                <Swiper
                    loop={true}
                    slidesPerView={6}
                    spaceBetween={14}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    grabCursor={true}
                    speed={2000}
                    modules={[Autoplay]}
                    className="Participant__Swiper"
                >
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">1</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">2</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">3</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">4</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">5</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">6</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">7</div></SwiperSlide>
                    <SwiperSlide><div className="participant__card">8</div></SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default ParticipantSection;