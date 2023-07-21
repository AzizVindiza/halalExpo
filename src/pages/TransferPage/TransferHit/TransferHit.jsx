import React from 'react';
import "./transferHit.sass"
import TransferCard from "./TransferCard/TransferCard";
import mans from "../img/mans.svg"
import women from "../img/women.svg"
import hit from "../img/HIT.svg"

const TransferHit = () => {
    return (
        <section className={"transferHit"}>
            <div className="transferHit__container container">
                <div className="transferHit__wrapper">
                    <div className="transferHit__box">
                        <TransferCard item={{img:mans,count:"1",p:"Наша команда может самостоятельно забронировать номер в соответствии с вашими пожеланиями, обеспечивая удобство и надежность во время вашего пребывания."}}/>
                        <span className="transferHit__span">
                            или
                        </span>
                        <TransferCard item={{img:women,count:"2",p:"У вас есть возможность перейти в раздел Гостиницы, ознакомиться с предложенными вариантами и оформить бронь самостоятельно."}}/>
                    </div>
                    <div className="transferHit__column">
                        <div className="transferHit__img">
                            <img src={hit} alt=""/>

                        </div>
                        <p className="transferHit__p">
                            Мы обеспечим вас всей необходимой информацией и поддержкой, чтобы сделать ваш выбор максимально удобным и простым.
                        </p>
                        <span className="transferHit__span2">
                            Присоединяйтесь к нам на Halal Investment and Trade Expo 2023 и доверьте нам заботу о вашем комфорте. Мы с нетерпением ждем вас и гарантируем незабываемые впечатления от мероприяти!
                        </span>

                    </div>



                </div>
            </div>

        </section>
    );
};

export default TransferHit;