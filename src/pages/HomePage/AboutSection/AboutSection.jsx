import React, {useContext} from 'react';
import './AboutSection.sass'
import svg from './about__svg.svg'
import {motion} from "framer-motion";
import {CustomContext} from "../../../Context";

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
    const {t} = useContext(CustomContext)
    return (
        <motion.section viewport={{amount:0.2, once:true}} initial={"hidden"} whileInView={"visible"} className="about">
            <motion.div custom={1} variants={textMotion}   className="container_fluid about__container">
                <h2 className="about__h2">Halal Investment and Trade 2023</h2>
                <p className="about__p">
                    {t("aboutSection.text")}
                    <br/>
                    <br/>

                </p>
                <div className="about__svg">
                    <img src={svg} alt="circle about"/>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection;