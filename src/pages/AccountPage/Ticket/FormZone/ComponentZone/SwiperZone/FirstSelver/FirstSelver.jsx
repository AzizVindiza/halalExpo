import React from 'react';
import Btn from "../../../../../../../components/Btn/Btn";
import "./firstSilver.sass"

const FirstSelver = ({title,count,size,price,background,color,btnColor}) => {
    return (
        <div   className={'firstSilver'}>
            <div style={{background : background}} className="firstSilver__right">
                <h2 style={{color : color}} className="firstSilver__h2">{title}</h2>
                <h3 style={{color : color}} className="firstSilver__h3">Количество мест: {count}</h3>
                <h3 style={{color : color}} className="firstSilver__h3">Размер: {size}</h3>
                <h3 style={{color : color}} className="firstSilver__h3">Оформление:</h3>
                <ul className="firstSilver__list">
                    <li style={{color : color}} className="firstSilver__li">Аренда стенда</li>
                    <li style={{color : color}} className="firstSilver__li">Коммуникации</li>
                    <li style={{color : color}} className="firstSilver__li"> Розетка на 2 деления</li>
                </ul>
                <ul className="firstSilver__ul">
                    <li style={{color : color}} className="firstSilver__li">Бейдж для сотрудника х2</li>
                    <li style={{color : color}} className="firstSilver__li">Проживание 2 чел*3дня (на базе завтрака)</li>
                    <li style={{color : color}} className="firstSilver__li">Трансфер (аэропорт-локация-аэропорт)</li>
                    <li style={{color : color}} className="firstSilver__li">Добавление компании в путеводитель выставки</li>
                </ul>
                 <div style={{background :btnColor}} className="firstSilver__price">
                         <span className={'firstSilver__span'}>{price}</span>
                 </div>
                <p style={{color : color}} className="firstSilver__p">Стоимость актуальна на период раннего бронирования до 20 июля</p>
            </div>

        </div>
    );
};

export default FirstSelver;