import React from 'react';
import "./investCard.sass"
import InvestCardSmall from "./InvestCardSmall/InvestCardSmall";
import promo from "../img/promo.png"
import comfort from "../img/comfort.png"
import vip from "../img/vip.png"
import premium from "../img/premium.png"



const InvestCard = () => {
    return (
        <div className={" investCard investCard__container container"}>
            <InvestCardSmall item={{img:promo,h2:"PROMO",price:"$900",num:"15",li:["Промо-стойка\n","Стул\n","B2B-встречах"]}}/>
            <InvestCardSmall item={{img:comfort,h2:"comfort",price:"$1050",num:"20",li:["Стол\n","Стул\n","Пресс-волл\n","Рол ап\n","Участие в B2B-встречах"]}}/>
            <InvestCardSmall item={{img:vip,h2:"VIP",price:" $1350",num:"4",li:["VIP-пространство\n","Кресло\n","Журнальный столик\n","Пресс-волл\n","Интерактивная сенсорная пан\n","Участие в B2B-встречах"]}}/>
            <InvestCardSmall item={{img:premium,h2:"PREMIUM",price:" $1500",num:"15",li:["Презентация на сцене перед инвесторами\n","Использование оборудования\n"," Участие в B2B-встречах\n","Услуга синхронного перевода"]}}/>
            <div className="investCard__box">
                <p className="investCard__p">
                    Стоимость участия с учетом раннего бронивания актуальна до 20 июля
                </p>
                <button className="investCard__btn">
                    Перейти к пакетам
                </button>
            </div>






        </div>
    );
};

export default InvestCard;