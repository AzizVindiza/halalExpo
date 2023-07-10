import React, {useContext} from 'react';
import './AboutSection.sass'
import svg from './about__svg.svg'
import {motion} from "framer-motion";
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";

const textMotion = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }
    )

}
const AboutSection = () => {
    const {t} = useTranslation()

    return (
        <motion.section viewport={{amount:0.2, once:true}} initial={"hidden"} whileInView={"visible"} className="about">
            <motion.div custom={1} variants={textMotion}   className="container_fluid about__container">
                <h2 className="about__h2">Halal Investment and Trade 2023</h2>
                <p className="about__p">
                    Halal Investment and Trade Expo 2023 – крупнейшая выставка халяльных инвестиционных и инфраструктурных проектов в Кыргызстане, проводимая в рамках развития международных торговых отношений и экспорта. Мероприятие объединяет профессионалов из разных секторов, демонстрирует последние тенденции и инновации, а также предоставляет платформу для взаимодействия экспонентов и посетителей. Выставка включает семинары, встречи и культурные мероприятия, а также специальный раздел для продуктов халяль-индустрии.

                </p>
                <p className="about__p about__p2">
                    В будущем мы стремимся сделать Halal Investment and Trade Expo крупнейшей халяльной платформой в Центральной Азии и СНГ, и установить стабильные отношения со странами исламского мира.

                </p>
                <div className="about__svg">
                    <img src={svg} alt="circle about"/>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection;