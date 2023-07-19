import React from 'react';
import Btn from "../../../../../../components/Btn/Btn";
import "./firstSilver.sass"
const FirstSelver = () => {
    return (
        <div className={'firstSilver'}>
            <div className="firstSilver__right">
                <h2 className="firstSilver__h2">silver</h2>
                <h3 className="firstSilver__h3">Количество мест: 236</h3>
                <h3 className="firstSilver__h3">Размер: 2м x 2м</h3>
                <h3 className="firstSilver__h3">Оформление:</h3>
                <ul className="firstSilver__list">
                    <li className="firstSilver__li">Аренда стенда</li>
                    <li className="firstSilver__li">Коммуникации</li>
                    <li className="firstSilver__li"> Розетка на 2 деления</li>
                </ul>
                <ul className="firstSilver__ul">
                    <li className="firstSilver__li">Бейдж для сотрудника х2</li>
                    <li className="firstSilver__li">Проживание 2 чел*3дня (на базе завтрака)</li>
                    <li className="firstSilver__li">Трансфер (аэропорт-локация-аэропорт)</li>
                    <li className="firstSilver__li">Добавление компании в путеводитель выставки</li>
                </ul>
                <Btn text={'$1800'}/>
                <p className="firstSilver__p">Стоимость актуальна на период раннего бронирования до 20 июля</p>
            </div>

        </div>
    );
};

export default FirstSelver;