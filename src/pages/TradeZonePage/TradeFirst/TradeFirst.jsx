import React from 'react';
import './TradeFirst.sass'
import seats from '../img/zones.png'
import badge1 from './Frame 901.svg'
import badge2 from './Frame 902.svg'
import badge3 from './Frame 903.svg'
import badge4 from './Frame 901.svg'
import badge5 from './Frame 901.svg'
import badge6 from './Frame 901.svg'
import circle from "./circle.png"
import zones from "../img/zones.png"

const TradeFirst = () => {
    return (
        <section className={"trade-first"}>
            <h2 className="trade-first__h2">TRADE ZONE</h2>
            <div className="trade-first__container">
                <div  className="trade-first__img container">
                    <img src={zones} alt="trade seats"/>
                </div>
                <div className="trade-first__box">
                    <div className={"trade-first__row container"}>
                        <div className="trade-first__col">
                            <h4 className="trade-first__h5">Отрасли</h4>
                            <ul className="trade-first__ul2">
                                <li className="trade-first__li2"><span className="trade-first__span">1 <img className={"trade-first__img"} src={circle} alt=""/></span><p className="trade-first__p">Промышленное производство
                                    Машиностроение и автоматизация производства
                                    Транспорт и логистика
                                    Техника и спецтехника</p></li>
                                <li className="trade-first__li2"><span className="trade-first__span">2 <img className={"trade-first__img"} src={circle} alt=""/></span><p className="trade-first__p">Информационные технологии и программное обеспечение
                                    Машиностроение и автоматизация производства
                                    Энергетика и альтернативные источники энергии
                                    Инновации в области экологии и устойчивого развития
                                    Финансовые и банковские продукты и услуги
                                    Строительство и недвижимость
                                    Образовательные продукты и услуги</p></li>
                                <li className="trade-first__li2"><span className="trade-first__span">3 <img className={"trade-first__img"} src={circle} alt=""/></span><p className="trade-first__p">Классическое и современное искусство
                                    Национальные товары, рукоделие, сувенирная продукция
                                    Экопродукция</p></li>
                                <li className="trade-first__li2"><span className="trade-first__span">4 <img className={"trade-first__img"} src={circle} alt=""/></span><p className="trade-first__p">Пищевая и сельскохозяйственная промышленность
                                    Мода и текстиль
                                    Туризм и гостеприимствог</p></li>
                            </ul>

                        </div>
                        <div className="trade-first__txt">
                            <h3 className="trade-first__h3">350+ УЧАСТНИКОВ</h3>
                            <ul className="trade-first__ul">
                                <li className="trade-first__li">Уникальная возможность для обмена идеями</li>
                                <li className="trade-first__li">Установления партнерств</li>
                                <li className="trade-first__li">Расширения деловых контактов</li>
                                <li className="trade-first__li">Добавь халяль-товары и услуги</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <div className="trade-first__badges container">
                <div className="trade-first__badge">
                    <div className="trade-first__badge-img">
                        <img src={badge1} alt="trade badge"/>
                    </div>
                    <h4 className="trade-first__h4">компании</h4>
                </div>
                <div className="trade-first__badge">
                    <div className="trade-first__badge-img">
                        <img src={badge2} alt="trade badge"/>
                    </div>
                    <h4 className="trade-first__h4">предприниматели</h4>
                </div>
                <div className="trade-first__badge">
                    <div className="trade-first__badge-img">
                        <img src={badge3} alt="trade badge"/>
                    </div>
                    <h4 className="trade-first__h4">поставщики</h4>
                </div>
                <div className="trade-first__badge">
                    <div className="trade-first__badge-img">
                        <img src={badge4} alt="trade badge"/>
                    </div>
                    <h4 className="trade-first__h4">дистрибьюторы</h4>
                </div>
                <div className="trade-first__badge">
                    <div className="trade-first__badge-img">
                        <img src={badge5} alt="trade badge"/>
                    </div>
                    <h4 className="trade-first__h4">покупатели</h4>
                </div>
                <div className="trade-first__badge">
                    <div className="trade-first__badge-img">
                        <img src={badge6} alt="trade badge"/>
                    </div>
                    <h4 className="trade-first__h4">Представителей бизнеса со всего мира</h4>
                </div>
            </div>
        </section>
    );
};

export default TradeFirst;