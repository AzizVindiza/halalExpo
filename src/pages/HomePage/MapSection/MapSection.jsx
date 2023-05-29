import React from 'react';
import './MapSection.sass'
import Location from "./Location/Location";
import Btn from "../../../components/Btn/Btn";
import {motion} from "framer-motion";

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
        <motion.section initial={"hidden"} whileInView={"visible"} className="map">

            <motion.div custom={1} variants={textMotion}>
                <h2 className="map__title container">Локации</h2>
            </motion.div>

            <div className="map__container container">
                <motion.div  custom={2} variants={textMotion} className="map__tabs">
                    <Location h2={"Локация №1: Территория недействующего аэропорта, г. Чолпон-Ата."} p={ "На пространстве недействующего аэропорта, развернется главная сцена Halal Investment and Trade Expo 2023. Данная локация станет центром выставки, где будут представлены инвестиционные проекты, товары, услуги и проекты местных и зарубежных компаний. "}/>
                    <Location h2={"Локация №1: Государственная резиденция №2, г. Чолпон-Ата."} p={ "Это значимое место станет достойной площадкой для официальной церемонии открытия Halal Investment and Trade Expo 2023. Статус и изысканный интерьер государственной резиденции подчеркнут престиж и важность проводимого мероприятия."}/>
                </motion.div>
                <motion.div custom={2} variants={cartMotion} className="map__wrapper">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4607.7357179856745!2d74.60042399242414!3d42.87863699970236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e74697b7a5%3A0xb625d929c04e872e!2z0J_QsNGA0Log0J_QsNC90YTQuNC70L7QstCw!5e0!3m2!1sru!2skg!4v1682581919768!5m2!1sru!2skg"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <a href="" className="map__a">
                        <Btn m={"big"} type="button" text="Подробнее"/>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MapSection;