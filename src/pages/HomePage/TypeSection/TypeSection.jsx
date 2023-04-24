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
import bg from './type__bg.svg'
const TypeSection = () => {
    return (
        <section className="type">
            <div className="type__container container_fluid">
                <div className="type__left">
                    <p className="type__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                    <div className="type__cards">
                        <div className="type__card">
                            <img src={icon1} alt="type"/>
                            <h3 className="type__h3">Производство</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon2} alt="type"/>
                            <h3 className="type__h3">Строительство </h3>
                        </div>
                        <div className="type__card">
                            <img src={icon3} alt="type"/>
                            <h3 className="type__h3">Инвестиции </h3>
                        </div>
                        <div className="type__card">
                            <img src={icon4} alt="type"/>
                            <h3 className="type__h3">Экопродукты</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon5} alt="type"/>
                            <h3 className="type__h3">Спорт и игры</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon6} alt="type"/>
                            <h3 className="type__h3">Научная <br/>деятельность </h3>
                        </div>
                        <div className="type__card">
                            <img src={icon7} alt="type"/>
                            <h3 className="type__h3">Медицина</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon8} alt="type"/>
                            <h3 className="type__h3">Образование</h3>
                        </div>
                        <div className="type__card">
                            <img src={icon9} alt="type"/>
                            <h3 className="type__h3">Этно</h3>
                        </div>
                    </div>
                </div>
                <div className="type__right">
                       <div className="type__row">
                           <h4 className="type__h4">Компаний</h4>
                           <div className="type__line type__line_long"></div>
                           <h5 className="type__h5">2000+</h5>
                       </div>
                       <div className="type__row">
                           <h4 className="type__h4">Спикеров</h4>
                           <div className="type__line type__line_middle"></div>
                           <h5 className="type__h5">150+</h5>
                       </div>
                       <div className="type__row">
                           <h4 className="type__h4">Стран</h4>
                           <div className="type__line type__line_middle"></div>
                           <h5 className="type__h5">30+</h5>
                       </div>
                       <div className="type__row">
                           <h4 className="type__h4">Панельных сессий</h4>
                           <div className="type__line type__line_short"></div>
                           <h5 className="type__h5">20+</h5>
                       </div>
                       <div className="type__row">
                           <h4 className="type__h4">B2B встречи</h4>
                           <div className="type__line type__line_middle"></div>
                           <h5 className="type__h5">300+</h5>
                       </div>
                       <div className="type__row">
                           <h4 className="type__h4">Экспонентов</h4>
                           <div className="type__line type__line_long"></div>
                           <h5 className="type__h5">1500+</h5>
                       </div>
                    <div className="type__bg">
                        <img src={bg} alt="circle"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TypeSection;