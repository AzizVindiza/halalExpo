import React from 'react';
import "./investorPeople.sass"
import p1 from "../img/p1.png"
import p2 from "../img/p2.png"
import p3 from "../img/p3.png"
import p4 from "../img/p4.png"
import p5 from "../img/p5.png"
import p6 from "../img/p6.png"
import p7 from "../img/p7.png"
import p8 from "../img/p8.png"



const InvestorPeople = () => {
    return (
        <section className={"investorPeople"}>
            <div className="investorPeople__container container">
                <div className="investorPeople__wrapper">
                    <div className="investorPeople__card">
                        <img src={p1} alt=""/>
                        <p className="investorPeople__p">
                            Член Российского-Саудовского Делового совета и генеральный директор Areej Group
                            Сулейман Аль Эйри
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p2} alt=""/>
                        <p className="investorPeople__p">
                            Президент «Фонда русско-арабских иследований и информации»
                            Маджид бин Абдель Азиз Аль-Турки
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p3} alt=""/>
                        <p className="investorPeople__p">
                            Генеральный директор
                            Magnesia Company Саудовской Аравии Салех Ибрагим Аль Сухибани
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p4} alt=""/>
                        <p className="investorPeople__p">
                            Представитель Министерства сельского хозяйства Саудовской Аравии Мешар Абдулмохсен АЛЬЯХ
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p5} alt=""/>
                        <p className="investorPeople__p">
                            Старший экономист Группы Исламского банка развития и Института Исламского банка развития (IsDBI)
                            Турхан Али Абдул Манап
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p6} alt=""/>
                        <p className="investorPeople__p">
                            Президент Благотворительного Исламского Фонда «Иман» шейх
                            Салех Абдулла Аль-Мазьяду
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p7} alt=""/>
                        <p className="investorPeople__p">
                            Генеральный директор
                            Международного инвестиционного холдинга«JTA Holding»
                            Амир Али Салеми
                        </p>

                    </div>
                    <div className="investorPeople__card">
                        <img src={p8} alt=""/>
                        <p className="investorPeople__p">
                            Генеральный директор группы
                            «Hylman» Саудовской Аравии
                            Фахд АЛЬ ЗАИД
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorPeople;