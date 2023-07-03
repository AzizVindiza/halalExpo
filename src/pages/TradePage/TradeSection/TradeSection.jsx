import React from 'react';
import './tradeSection.sass'
import trade from './tradeSection.svg'
import check from './Check_Double.svg'
import company from "../tradeImg/company.svg"
import pred from "../tradeImg/pred.svg"
import post from "../tradeImg/post.svg"
import dis from "../tradeImg/dis.svg"
import buy from "../tradeImg/buyers.svg"
import biznes from "../tradeImg/biznes.svg"

const TradeSection = () => {
    return (
        <section className={"trade"}>
            <div className="trade__container container">
                <h2 className="trade__h2">TRADE ZONE</h2>
                <div className="trade__img">
                    <img src={trade} alt=""/>
                    <div className="trade__img_text">1000+ участников</div>
                </div>
                <div className={"trade__box"}>
                    <div className="trade__left">
                        <div className="trade__item">
                            <img src={check} alt=""/>
                            <span className="trade__span">Уникальная возможность для обмена идеями</span>
                        </div>
                        <div className="trade__item">
                            <img src={check} alt=""/>
                            <span className="trade__span">Установления партнерств</span>
                        </div>
                        <div className="trade__item">
                            <img src={check} alt=""/>
                            <span className="trade__span">Расширения деловых контактов</span>
                        </div>
                    </div>
                    <div className="trade__right">
                        <div className="trade__col">
                            <div className="trade__square">
                                <img src={company} alt=""/>
                            </div>
                            <span className="trade__span2">компании</span>
                        </div>
                        <div className="trade__col">
                            <div className="trade__square">
                                <img src={pred} alt=""/>
                            </div>
                            <span className="trade__span2">предприниматели</span>
                        </div>
                        <div className="trade__col">
                            <div className="trade__square">
                                <img src={post} alt=""/>
                            </div>
                            <span className="trade__span2">поставщики</span>
                        </div>
                        <div className="trade__col">
                            <div className="trade__square">
                                <img src={dis} alt=""/>
                            </div>
                            <span className="trade__span2">дистрибьюторы</span>
                        </div>
                        <div className="trade__col">
                            <div className="trade__square">
                                <img src={buy} alt=""/>
                            </div>
                            <span className="trade__span2">покупатели</span>
                        </div>
                        <div className="trade__col">
                            <div className="trade__square">
                                <img src={biznes} alt=""/>
                            </div>
                            <span className="trade__span2">представителей бизнеса <br/> со всего мира</span>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
};

export default TradeSection;