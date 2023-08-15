    import React from 'react';
import './TypeSection.sass'
import icon1 from './cube1.svg'
import icon2 from './cube2.svg'
import icon3 from './cube3.svg'
import icon4 from './cube4.svg'
import icon5 from './cube5.svg'
import icon6 from './cube6.svg'
import icon7 from './cube7.svg'
import icon8 from './cube8.svg'
import icon9 from './cube9.svg'
import icon10 from './cube10.svg'
import icon11 from './cube11.svg'
import icon12 from './cube12.svg'
import icon13 from './cube13.svg'
import icon14 from './cube14.svg'
import icon15 from './cube15.svg'
import icon16 from './cube16.svg'
import icon17 from './cube17.svg'

import Rnew from "./Rnew.png"

import right from './oval.png'
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
                <div className="type__left ">
                    <div className="type__cards">
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon1} alt="type"/>
                            </div>


                            <h3 className="type__h3">Машиностроение и автоматизация производства</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon2} alt="type"/>
                            </div>


                            <h3 className="type__h3">Строительство  и недвижимость</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon3} alt="type"/>
                            </div>



                            <h3 className="type__h3">Инвестиционные проекты </h3>
                        </div>

                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon4} alt="type"/>
                            </div>


                            <h3 className="type__h3">Информационные технологии и программное обеспечение</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon5} alt="type"/>
                            </div>


                            <h3 className="type__h3">Медицинская и фармацевтическая промышленность</h3>
                        </div>


                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon6} alt="type"/>
                            </div>


                            <h3 className="type__h3">Пищевая и сельскохозяйственная промышленность</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon7} alt="type"/>
                            </div>


                            <h3 className="type__h3">Экотовары</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon8} alt="type"/>
                            </div>


                            <h3 className="type__h3">Образовательные продукты и услуги</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon9} alt="type"/>
                            </div>


                            <h3 className="type__h3">Искусство</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">

                                <img src={icon10} alt="type"/>
                            </div>

                            <h3 className="type__h3">Финансовые и банковские продукты и услуги</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon11} alt="type"/>
                            </div>


                            <h3 className="type__h3">Туризм и гостеприимство</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon12} alt="type"/>
                            </div>


                            <h3 className="type__h3">Транспорт и логистика.</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon13} alt="type"/>
                            </div>


                            <h3 className="type__h3">Энергетика и альтернативные источники энергии</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon14} alt="type"/>
                            </div>


                            <h3 className="type__h3">Мода и текстиль</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon15} alt="type"/>
                            </div>


                            <h3 className="type__h3">Инновации в области экологии и устойчивого развития</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon16} alt="type"/>
                            </div>


                            <h3 className="type__h3">Техника и спецтехника</h3>
                        </div>
                        <div className="type__card">
                            <div className="type__img">
                                <img src={icon17} alt="type"/>
                            </div>


                            <h3 className="type__h3">Национальные товары, рукоделие, сувенирная продукция</h3>
                        </div>
                    </div>
                </div>
                <div className="type__right">
                    <img src={Rnew} alt=""/>
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