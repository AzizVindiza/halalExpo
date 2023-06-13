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
        <motion.section  viewport={{once:true}} initial={"hidden"} whileInView={"visible"} className="map">

            <motion.div custom={1} variants={textMotion}>
                <h2 className="map__title container">Локации</h2>
            </motion.div>

            <div className="map__container container">
                <motion.div  custom={2} variants={textMotion} className="map__tabs">
                    <Location h2={"Локация №1: Территория недействующего аэропорта, г. Чолпон-Ата"} p={ "На пространстве недействующего аэропорта, развернется главная сцена Halal Investment and Trade Expo 2023. Данная локация станет центром выставки, где будут представлены инвестиционные проекты, товары, услуги и проекты местных и зарубежных компаний."}/>

                </motion.div>
                <motion.div custom={2} variants={cartMotion} className="map__wrapper">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5387248185575!2d77.12513972164737!3d42.64993794410837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f6e7dde5c071%3A0x6dbdfe25c037c89d!2z0JjQv9C_0L7QtNGA0L7QvCDQsy7Qp9C-0LvQv9C-0L0t0JDRgtCw!5e0!3m2!1sru!2skg!4v1686032967680!5m2!1sru!2skg"
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