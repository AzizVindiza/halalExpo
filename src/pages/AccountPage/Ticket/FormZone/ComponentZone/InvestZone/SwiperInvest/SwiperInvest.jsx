import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import FirstSelver from "../../SwiperZone/FirstSelver/FirstSelver";


const SwiperInvest = ({invest,invest2,invest3,invest4}) => {
    return (
        <div className={"mySwiper-first"}>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper-first__box"
            >
                <SwiperSlide className={'mySwiper-first__block mySwiper-first__block_second'}>
                    <div className="mySwiper-first__slide">
                        <img src={invest} className={'mySwiper-first__img'} alt="stand"/>
                    </div>

                    <FirstSelver background={"linear-gradient(45deg, rgba(16, 146, 62, 0.12) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(16, 146, 62, 0.12) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #40A865"} price={"$900"} title={'PROMO'} count={15} size={"2м x 2м"}/>
                </SwiperSlide>

                <SwiperSlide className={'mySwiper-first__block'}>
                    <div className="mySwiper-first__slide">
                        <img src={invest2} className={'mySwiper-first__img'} alt="stand"/>
                    </div>
                    <FirstSelver background={"linear-gradient(45deg, rgba(16, 146, 62, 0.12) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(16, 146, 62, 0.12) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #40A865"} price={"$1100"} title={'COMFORT'} count={20} size={"2м x 2м"}/>
                </SwiperSlide>
                <SwiperSlide className={'mySwiper-first__block'}>
                    <div className="mySwiper-first__slide">
                        <img src={invest3} className={'mySwiper-first__img'} alt="stand"/>
                    </div>
                    <FirstSelver background={"linear-gradient(45deg, rgba(16, 146, 62, 0.12) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(16, 146, 62, 0.12) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #40A865"} price={"$2100"} title={'VIP'} count={4} size={"2м x 2м"}/>
                </SwiperSlide>
                <SwiperSlide className={'mySwiper-first__block'}>
                    <div className="mySwiper-first__slide">
                        <img src={invest4} className={'mySwiper-first__img'} alt="stand"/>
                    </div>
                    <FirstSelver background={"linear-gradient(45deg, rgba(16, 146, 62, 0.12) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(16, 146, 62, 0.12) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #40A865"} price={"$2500"} title={'PREMIUM'} count={15} size={"2м x 2м"}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperInvest;