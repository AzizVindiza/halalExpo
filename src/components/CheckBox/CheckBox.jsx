import React from 'react';
import './checkBox.sass'

const CheckBox = () => {
    return (
        <div className="checkBox">
            <div className="checkBox__wrapper">

                <div  className="checkBox__box" >
                    <h2 className="checkBox__name" >Я заинтересован в</h2>
                    <label className="checkBox__label" htmlFor="">
                        <input type="checkbox"/>
                        <span>В посещении на HIT EXPO</span>
                    </label>
                    <label htmlFor="">
                        <input type="checkbox"/>
                        <span>В участии на HIT EXPO</span>
                    </label>
                    <label htmlFor="">
                        <input type="checkbox"/>
                        <span>В поиске проектов</span>
                    </label>
                    <label htmlFor="">
                        <input type="checkbox"/>
                        <span>Другое</span>
                    </label>


                </div>
                <div  className="checkBox__box" >
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
            </div>
        </div>

    );
};

export default CheckBox;