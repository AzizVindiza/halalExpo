    import React from 'react';
import './TypeSection.sass'
import icon1 from './type__1.svg'
import icon2 from './type__2.svg'
import icon3 from './type__3.svg'
import icon4 from './type__4.svg'
import icon5 from './type__5.svg'
import icon6 from './type__6.svg'
import icon7 from './type__7.svg'
import icon8 from './type__8.svg'
import icon9 from './type__9.svg'
import icon10 from './type__10.svg'
import icon11 from './type__11.svg'
import national from "./national.svg"
import cars from "./cars.svg"
import innovation from "./innovation.svg"
import energy from "./energy.svg"
import flowers from './flowers.svg'
import special from "./special.svg"
import cloth from "./clothes.svg"

import bg from './type__bg.svg'
import right from './right.png'
import {motion} from "framer-motion";


    const textMotion = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => (
            {
                x: 0,
                opacity: 1,
                transition: {delay: custom * 0.2}
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
                transition: {delay: custom * 0.8}
            }
        )

    }
    const cartMotion2 = {
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
    const cartMotion3 = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => (
            {
                x: 0,
                opacity: 1,
                transition: {delay: custom * 1.6}
            }
        )

    }

    const TypeSection = () => {
    return (
        <motion.section
            transion={{duration:0.6}}
            initial={"hidden"}
            whileInView={"visible"} className="type">
            <div className="type__container container">
                <div className="type__left">
                    <div className="type__cards">
                        <div className="type__card">
                            <img src={icon1} alt="type"/>
                            <h3 className="type__h3">Машиностроение и автоматизация производства</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon2} alt="type"/>
                            <h3 className="type__h3">Строительство  и недвижимость</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon3} alt="type"/>
                            <h3 className="type__h3">Инвестиционные проекты </h3>
                        </div>

                        <div className="type__card">
                            <img src={icon5} alt="type"/>
                            <h3 className="type__h3">Информационные технологии и программное обеспечение</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon7} alt="type"/>
                            <h3 className="type__h3">Медицинская и фармацевтическая промышленность</h3>
                        </div>


                        <div className="type__card">
                            <img src={flowers} alt="type"/>
                            <h3 className="type__h3">Пищевая и сельскохозяйственная промышленность</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon4} alt="type"/>
                            <h3 className="type__h3">Экотовары</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon8} alt="type"/>
                            <h3 className="type__h3">Образовательные продукты и услуги</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon9} alt="type"/>
                            <h3 className="type__h3">Искусство</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon10} alt="type"/>
                            <h3 className="type__h3">Финансовые и банковские продукты и услуги</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon11} alt="type"/>
                            <h3 className="type__h3">Туризм и гостеприимство</h3>
                        </div>
                        <div className="type__card">
                            <img src={cars} alt="type"/>
                            <h3 className="type__h3">Транспорт и логистика.</h3>
                        </div>
                        <div className="type__card">
                            <img src={energy} alt="type"/>
                            <h3 className="type__h3">Энергетика и альтернативные источники энергии</h3>
                        </div>
                        <div className="type__card">
                            <img src={cloth} alt="type"/>
                            <h3 className="type__h3">Мода и текстиль</h3>
                        </div>
                        <div className="type__card">
                            <img src={innovation} alt="type"/>
                            <h3 className="type__h3">Инновации в области экологии и устойчивого развития</h3>
                        </div>
                        <div className="type__card">
                            <img src={special} alt="type"/>
                            <h3 className="type__h3">Техника и спецтехника</h3>
                        </div>
                        <div className="type__card">
                            <img src={national} alt="type"/>
                            <h3 className="type__h3">Национальные товары, рукоделие, сувенирная продукция</h3>
                        </div>
                    </div>
                </div>
                <div className="type__right">
                    <img src={right} alt=""/>
                    {/*   <motion.div custom={1} variants={textMotion} className="type__row">*/}
                    {/*       <h4 className="type__h4">Компаний</h4>*/}
                    {/*       <div className="type__line type__line_middle"></div>*/}
                    {/*       <h5 className="type__h5">2000+</h5>*/}
                    {/*   </motion.div>*/}

                    {/*   <motion.div custom={1} variants={cartMotion} className="type__row">*/}
                    {/*       <h4 className="type__h4">Стран</h4>*/}
                    {/*       <div className="type__line type__line_middle"></div>*/}
                    {/*       <h5 className="type__h5">30+</h5>*/}
                    {/*   </motion.div>*/}
                    {/*   <motion.div custom={1} variants={cartMotion2} className="type__row">*/}
                    {/*       <h4 className="type__h4">B2B-встречи</h4>*/}
                    {/*       <div className="type__line type__line_short"></div>*/}
                    {/*       <h5 className="type__h5">300+</h5>*/}
                    {/*   </motion.div>*/}
                    {/*   <motion.div custom={1} variants={cartMotion3} className="type__row">*/}
                    {/*       <h4 className="type__h4">Экспонентов</h4>*/}
                    {/*       <div className="type__line type__line_long"></div>*/}
                    {/*       <h5 className="type__h5">1500+</h5>*/}
                    {/*   </motion.div>*/}

                    {/*<div className="type__bg">*/}
                    {/*    <img src={bg} alt="circle"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </motion.section>
    );
};

export default TypeSection;