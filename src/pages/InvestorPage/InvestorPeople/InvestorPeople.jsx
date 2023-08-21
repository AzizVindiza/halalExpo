import React from 'react';
import "./investorPeople.sass"

const InvestorPeople = () => {

    const arr = [
        {
        img : "../asserts/InvestorImg/p1.png",
        text : "Член Российского-Саудовского Делового совета и генеральный директор Areej Group Сулейман Аль Эйри"
       },
        {
        img : "../asserts/InvestorImg/p2.png",
        text : "    Президент «Фонда русско-арабских иследований и информации» Маджид бин Абдель Азиз Аль-Турки"
       },
        {
        img : "../asserts/InvestorImg/p3.png",
        text : "Генеральный директор Magnesia Company Саудовской Аравии Салех Ибрагим Аль Сухибани"
       },
        {
        img : "../asserts/InvestorImg/p4.png",
        text : "Представитель Министерства сельского хозяйства Саудовской Аравии Мешар Абдулмохсен АЛЬЯХ"
       },
        {
        img : "../asserts/InvestorImg/p5.png",
        text : "Старший экономист Группы Исламского банка развития и Института Исламского банка развития (IsDBI) Турхан Али Абдул Манап"
       },
        {
        img : "../asserts/InvestorImg/p6.png",
        text : "Президент Благотворительного Исламского Фонда «Иман» шейх Салех Абдулла Аль-Мазьяду"
       },
        {
        img : "../asserts/InvestorImg/p7.png",
        text : "Генеральный директор Международного инвестиционного холдинга«JTA Holding» Амир Али Салеми"
       },
        {
        img : "../asserts/InvestorImg/p8.png",
        text : "Генеральный директор группы «Hylman» Саудовской Аравии Фахд АЛЬ ЗАИД"
       },

]

    return (
        <section className={"investorPeople"}>
            <div className="investorPeople__container container">
                <div className="investorPeople__wrapper">
                    {
                        arr.map((item) => (
                            <div className="investorPeople__card">
                                <img src={item.img} alt=""/>
                                <p className="investorPeople__p">
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default InvestorPeople;