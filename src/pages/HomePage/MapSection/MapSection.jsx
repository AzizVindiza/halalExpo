import React from 'react';
import './MapSection.sass'
import Location from "./Location/Location";
import Btn from "../../../components/Btn/Btn";
import {motion} from "framer-motion";
import img from "./img.png"

const textMotion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        }
    )

}
const cartMotion = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}
        }
    )

}


const MapSection = () => {
    return (
        <motion.section  viewport={{once:true}} initial={"hidden"} whileInView={"visible"} className="map">

            <motion.div custom={1} variants={textMotion}>
                <h2 className="map__title container">Локации</h2>
            </motion.div>

            <div className="map__container container">
                <motion.div  custom={2} variants={textMotion} className="map__tabs">
                    <Location h2={"26.08.23 - 28.08.23 Культурный центр «Рух Ордо», г.Чолпон-Ата, Иссык-Кульская область, Кыргызская Республика"} p={ "На пространстве недействующего аэропорта, развернется главная сцена Halal Investment and Trade Expo 2023. Данная локация станет центром выставки, где будут представлены инвестиционные проекты, товары, услуги и проекты местных и зарубежных компаний."}/>

                </motion.div>
                <motion.div custom={2} variants={cartMotion} className="map__wrapper">
                    <div className="map__img">
                        <img src={img} alt=""/>
                    </div>
                    <a href="" className="map__a">
                        <Btn m={"big"} type="button" text="Подробнее"/>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MapSection;