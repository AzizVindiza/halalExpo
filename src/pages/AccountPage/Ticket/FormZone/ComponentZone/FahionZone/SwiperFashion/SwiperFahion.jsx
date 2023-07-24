import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import FirstSelver from "../../SwiperZone/FirstSelver/FirstSelver";


const SwiperFashion = ({fashion}) => {
    return (
        <div>
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
                            <img src={fashion} className={'mySwiper-first__img'} alt="stand"/>
                        </div>
                        <FirstSelver background={"linear-gradient(45deg, rgba(16, 146, 62, 0.12) 0%, rgba(255, 255, 255, 0.20) 35.42%, rgba(255, 255, 255, 0.20) 48.25%, rgba(16, 146, 62, 0.12) 100%), radial-gradient(75.67% 66.60% at 9.69% 11.40%, rgba(0, 0, 0, 0.20) 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #40A865"} price={"$1100"} title={'КРОНШТЕЙНЫ'} count={20} size={"2м x 2м"}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperFashion;