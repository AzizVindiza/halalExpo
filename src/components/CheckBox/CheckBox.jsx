import React from 'react';
import './checkBox.sass'

const CheckBox = () => {
    return (
        <div className="checkBox">
            <div className="checkBox__choose">
                <h2 className="checkBox__name" >Как вы узнали о мероприятие</h2>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>Инстаграм</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>ТВ, Радио</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>Новостные порталы</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>Другое</span>
                </label>

            </div>
            <div className="checkBox__choose">
                <h2 className="baseForm__name" >Как вы узнали о мероприятие</h2>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>Инстаграм</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>ТВ, Радио</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>Новостные порталы</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>Другое</span>
                </label>

            </div>
        </div>

    );
};

export default CheckBox;