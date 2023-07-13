import React from 'react';
import './checkBox.sass'
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBox = () => {
    return (
        <div className="checkBox">
            <h2 className="checkBox__name" >Откуда вы узнали о выставке?</h2>
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <InvestorCheck theme={'label'} title={'Приглашение от организаторов по почте'} name={'invite_mail'}/>
                    <InvestorCheck theme={'label'} title={'Приглашение от экспонента выставки'} name={'invite_fair'}/>
                    <InvestorCheck theme={'label'} title={'Приглашение от Министерства / ведомства'} name={'invite_minister'}/>
                    <InvestorCheck theme={'label'} title={'Сообщение по тел/факсу от организаторов'} name={'message'}/>
                    <InvestorCheck theme={'label'} title={'Наружная реклама в городе'} name={'ad_city'}/>
                </div>
                <div  className="checkBox__box" >
                    <InvestorCheck title={'ТВ'} name={'tv_bool'}/>
                    <InvestorCheck title={'Telegram'} name={'telegram_bool'}/>
                    <InvestorCheck title={'Instagram'} name={'instagram_bool'}/>
                    <InvestorCheck title={'Whats App'} name={'whatsapp_bool'}/>
                    <InvestorCheck title={'Радио реклама'} name={'tv_radio'}/>
                </div>
            </div>
        </div>

    );
};

export default CheckBox;