import React from 'react';
import Btn from "../../../../../../components/Btn/Btn";
import "./secondselver.sass"
const FirstSelver = () => {
    return (
        <div className={'secondSilver'}>
            <div className="secondSilver__right">
                <h2 className="secondSilver__h2">silver</h2>
                <h3 className="secondSilver__h3">Количество мест: 236</h3>
                <h3 className="secondSilver__h3">Размер: 2м x 2м</h3>
                <h3 className="secondSilver__h3">Оформление:</h3>
                <ul className="secondSilver__list">
                    <li className="secondSilver__li">Аренда стенда</li>
                    <li className="secondSilver__li">Коммуникации</li>
                    <li className="secondSilver__li"> Розетка на 2 деления</li>
                </ul>
                <ul className="secondSilver__ul">
                    <li className="secondSilver__li">Бейдж для сотрудника х2</li>
                    <li className="secondSilver__li">Проживание 2 чел*3дня (на базе завтрака)</li>
                    <li className="secondSilver__li">Трансфер (аэропорт-локация-аэропорт)</li>
                    <li className="secondSilver__li">Добавление компании в путеводитель выставки</li>
                </ul>
                <Btn text={'$1800'}/>
                <p className="secondSilver__p">Стоимость актуальна на период раннего бронирования до 20 июля</p>
            </div>

        </div>
    );
};

export default FirstSelver;