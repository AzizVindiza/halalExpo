import React from 'react';
import './TradeFirst.sass'
import seats from './trade-first__seats.png'
import badge1 from './Frame 901.svg'
import badge2 from './Frame 902.svg'
import badge3 from './Frame 903.svg'
import badge4 from './Frame 901.svg'
import badge5 from './Frame 901.svg'
import badge6 from './Frame 901.svg'

const TradeFirst = () => {
    return (
        <section className={"trade-first"}>
            <h2 className="trade-first__h2">TRADE ZONE</h2>
            <div className="container trade-first__container">
                <div className="trade-first__img">
                    <img src={seats} alt="trade seats"/>
                </div>
                <div className="trade-first__txt">
                    <h3 className="trade-first__h3">500+ УЧАСТНИКОВ</h3>
                    <ul className="trade-first__ul">
                        <li className="trade-first__li">Уникальная возможность для обмена идеями</li>
                        <li className="trade-first__li">Установления партнерств</li>
                        <li className="trade-first__li">Расширения деловых контактов</li>
                        <li className="trade-first__li">Добавь халяль-товары и услуги</li>
                    </ul>
                </div>
            </div>
            <div className="trade-first__badges">
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