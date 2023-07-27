import React from 'react';
import './TradeSecond.sass'
import stand from './1 925.png'
import stand2 from './2 206.png'
import TradeStandType from "./TradeStand/TradeStandType";
const standart = {
    name : "Standart",
    place : "Количество мест: 168",
    size : "Размер: 2м x 2м",
    per : "25",
    lists : [
        {
            title : "Оформление:",
            li : ["Аренда стенда" ,
                "Коммуникации" ,
                "Розетка на 2 деления"]
        },
        {
            title : "Дополнительно:",
            li : [
                "Бейдж для сотрудника х1" ,
                "Добавление компании в путеводитель выставки"
            ]
        }

    ]

}
const gold = {
    name : "Gold",
    place : "Количество мест: 42",
    size : "Размер: 3м x 3м",
    per : "25",
    lists : [
        {
            title : "Оформление:",
            li : [
                "Аренда оборудованной площади",
                "Коммуникации",
                "Розетка на 2 деления"
            ]
        },
        {
            title : "Дополнительно:",
            li : [
                "Бейдж для сотрудника х3",
                "Добавление компании в путеводитель выставки"
            ]
        }

    ]

}
const silver = {
    name : "Silver",
    place : "Количество мест: 168",
    size : "Размер: 2м x 2м",
    per : "50",
    lists : [
        {
            title : "Оформление:",
            li : ["Аренда стенда" ,
                "Коммуникации" ,
                "Розетка на 2 деления"]
        },
        {
            title : "Дополнительно:",
            li : [
                "Бейдж для сотрудника х2" ,
                "Добавление компании в путеводитель выставки"
            ]
        }

    ]

}
const TradeSecond = () => {
    return (
        <section className={"trade-second"}>
            <div className="trade-second__container container">
                <h2 className="trade-second__h2">Стенды</h2>
                <p className="trade-second__p">
                    Стенды в трейд-зоне - это идеальное место для участников выставки,
                    чтобы продемонстрировать свою компанию, привлечь внимание посетителей
                    и установить важные деловые контакты. Мы предлагаем различные варианты
                    стендов, соответствующие вашим потребностям и бюджету:</p>
                <div className="trade-second__stand">
                    <div className="trade-second__img1">
                        <img src={stand} alt="stand sample"/>
                    </div>
                </div>
                <div className="trade-second__box">
                    <TradeStandType stand={standart}/>
                    <TradeStandType stand={silver}/>
                </div>

                <div className="trade-second__img2">
                    <img src={stand2} alt="stand sample"/>
                </div>
                <TradeStandType stand={gold}/>
                <span className="trade-second__span">
                    Стоимость участия с учетом раннего бронивания актуальна до 20 июля
                </span>


            </div>
        </section>
    );
};

export default TradeSecond;