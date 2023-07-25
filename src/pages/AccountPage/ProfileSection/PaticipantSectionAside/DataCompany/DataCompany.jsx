import React from 'react';
import "./datacompany.sass"
import BtnProfile from "../../../../../components/BtnProfile/BtnProfile";
import {useSelector} from "react-redux";
const DataCompany = () => {
    const  {user} = useSelector((store) => store.user)
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
                        <span>{user.company_one}</span>
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                          <span>{user.company_two}</span>
                        <input type="text" className="datacompany__input"/>
                     </label>
                      <label htmlFor="" className="datacompany__label">
                          <span>{user.number_of_employees}</span>
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                          <span>{user.other_trade}</span>
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
                        <span>{user.country}</span>
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                          <span>{user.city}</span>
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                          <span>{user.address_one}</span>
                        <input type="text" className="datacompany__input"/>
                    </label>
                      <label htmlFor="" className="datacompany__label">
                          <span>{user.address_two}</span>
                        <input type="text" className="datacompany__input"/>
                    </label>
                </div>
            </div>
            <h3 className="datacompany__h3">Описание</h3>

                <p className="datacompany__p">{user.describe_company}</p>
            <div className="datacompany__inner">
                <div></div>
                <BtnProfile text={'Редактировать'}/>
            </div>

        </div>
    );
};

export default DataCompany;