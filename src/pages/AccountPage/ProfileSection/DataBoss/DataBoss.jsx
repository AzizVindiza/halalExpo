import React from 'react';
import "./dataBoss.sass"
import BtnProfile from "../../../../components/BtnProfile/BtnProfile";
import {useSelector} from "react-redux";

const DataBoss = () => {
    const {user} = useSelector((store) => store.user)

    return (
        <div className={'dataBoss'}>
            <div className="dataBoss__wrapper">
                <div className="dataBoss__left">
                    <h2 className="dataBoss__h2">Данные о руководителя</h2>
                    <div className="dataBoss__block">
                        <h3 className="dataBoss__h3">{user.name_manager && user.name_manager}</h3>
                        <span className="dataBoss__span">(Руководитель)</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Дата рождения</h4>
                        <span className="dataBoss__span">{user.birth_manager && user.birth_manager}</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">ИНН</h4>
                        <div className="dataBoss__span">2132435457688990</div>
                    </div>

                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Действующий на основании</h4>
                        <span className={'dataBoss__span'}>+78978987878</span>
                    </div>
                    <h4 className="dataBoss__h4">+Добавить номер телефона</h4>
                </div>
                <div className="dataBoss__right">
                    <h2 className="dataBoss__h2">Контактное лицо</h2>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">ФИО</h4>
                        <span className="dataBoss__span">Каныбекова Кызжибек</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Номер телефона</h4>
                        <span className="dataBoss__span">+996 770777777</span>
                    </div>
                    <div className="dataBoss__block">
                        <h4 className="dataBoss__h4">Email</h4>
                        <div className="dataBoss__span">Kaybekovakyzzhibek@gmail.com</div>
                    </div>
                    <BtnProfile text={'Отправить запрос на редактирование'}/>

                </div>
            </div>
        </div>
    );
};

export default DataBoss;