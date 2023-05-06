import React from 'react';
import "./rowSection.sass"

const RowSection = () => {
    return (
        <div className={'rowSection'}>
            <div className="container rowSection__container">
                <h2 className="rowSection__h2">29.07.23 - 01.08.23 Иссык-Кульская область Экспо, МВЦ. г. Чолпон-Ата</h2>
                <div className="rowSection__wrapper">
                    <div className="rowSection__user">
                        <button className={'rowSection__in'}>Вход/</button>
                        <button className={'rowSection__reg'}>Регистрация</button>
                    </div>
                    <div className="rowSection__change">
                        <button className={'rowSection__lang'}>RU</button>
                        <button className={'rowSection__lang'}>EN</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RowSection;