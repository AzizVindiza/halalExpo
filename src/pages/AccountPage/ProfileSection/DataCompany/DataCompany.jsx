import React from 'react';
import "./datacompany.sass"
import BtnProfile from "../../../../components/BtnProfile/BtnProfile";
const DataCompany = () => {
    return (
        <div className={'datacompany'}>
            <h2 className="datacompany__h2">Данные о компании</h2>
            <div className="datacompany__wrapper">
                <ul className="datacompany__list">
                    <li className="datacompany__li">Название компании</li>
                    <li className="datacompany__li">Юридическое название компании</li>
                    <li className="datacompany__li">Количество сотрудников</li>
                    <li className="datacompany__li">Направление</li>
                </ul>
                <div className="datacompany__list">
                    <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                </div>
                <ul className="datacompany__list">
                    <li className="datacompany__li">Страна</li>
                    <li className="datacompany__li">Город</li>
                    <li className="datacompany__li">Юридический адрес</li>
                    <li className="datacompany__li">Фактический адрес</li>
                </ul>
                <div className="datacompany__list">

                    <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                        <input type="text" className="datacompany__input"/>
                    </label>
                </div>
            </div>
            <h3 className="datacompany__h3">Описание</h3>

                <p className="datacompany__p">
                    Мы предоставляем различные способы оплаты для наших товаров, чтобы обеспечить удобство и гибкость для наших клиентов. Вы можете выбрать один из следующих способов оплаты при приобретении наших товаров:
                </p>
            <div className="datacompany__inner">
                <div></div>
                <BtnProfile text={'Редактировать'}/>
            </div>

        </div>
    );
};

export default DataCompany;