import React from 'react';
import "./TargetSection.sass"
import img from './img.svg'
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
            transition: {delay: custom * 0.8}
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
            transition: {delay: custom * 1.2}
        }
    )

}
const TargetSection = () => {
    return (
        <motion.section initial={"hidden"} whileInView={"visible"} className="target">
            <div className="target__container container">
                <motion.div custom={1} variants={textMotion} className="target__img">
                    <img src={img} alt="darts"/>
                </motion.div>
                <motion.div custom={1} variants={cartMotion} className="target__txt">
                    <h2 className="target__h2">
                        Цель
                    </h2>
                    <p className="target__p">
                        Содействие развитию экономики стран Центральной Азии, становлению
                        халяль-индустрии в странах региона
                        и помощь предпринимателям в презентации и реализации своих
                        бизнес-проектов по исламски принципам.
                    </p>
                </motion.div>
            </div>

        </motion.section>
    );
};

export default TargetSection;