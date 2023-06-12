import React from 'react';
import './TradeStyleSection.sass'
import left from './left.svg'
import right from './right.svg'

const TradeStyleSection = () => {
    return (
        <section className={"tradeStyle"}>

            <div className="tradeStyle__container container">
                <img className={"tradeStyle__img1"} src={left} alt=""/>
                <img className={"tradeStyle__img2"} src={right} alt=""/>
                <div className="tradeStyle__wrapper">
                    <div className="tradeStyle__box">
                        <h2 className="tradeStyle__h2">Этно-стиль</h2>
                        <p className="tradeStyle__p">
                            Зона Trade оформлена в этно-стиле, отражая культуру и традиции разных народов. Это создает атмосферу взаимопонимания и уважения к разнообразию, а также позволяет участникам получить глубокий опыт знакомства с культурными особенностями и традициями различных народов.
                        </p>
                    </div>
                    <div className="tradeStyle__box">
                        <h2 className="tradeStyle__h2">Распределение <br/> по отраслям</h2>
                        <p className="tradeStyle__p">
                            Зона Trade организована в соответствии с различными отраслями, представленными на выставке. Это позволяет участникам легко найти компании и продукты, соответствующие их интересам и требованиям. Каждая отрасль имеет свою уникальную область, где участники могут представить свои товары или услуги.                        </p>
                    </div>
                    <div className="tradeStyle__box">
                        <h2 className="tradeStyle__h2">Открытый доступ</h2>
                        <p className="tradeStyle__p">
                            В зоне Trade предусмотрен открытый доступ ко всем участникам выставки. Это означает, что каждый посетитель имеет возможность посетить все стенды и зону, познакомиться с продукцией и услугами участников, а также установить контакты с представителями бизнеса других стран.                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default TradeStyleSection;