import React from 'react';
import './checkBox.sass'
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBox = () => {
    return (
        <div className="checkBox">
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <h2 className="checkBox__name" >Я заинтересован в</h2>
                    <InvestorCheck title={'Посещение на HIT EXPO'} name={'checkbox'}/>
                    <InvestorCheck title={'Участие на HIT EXPO'} name={'checkbox2'}/>
                    <InvestorCheck title={'Поиске проектов'} name={'checkbox3'}/>
                    <InvestorCheck title={'Другое'} name={'checkbox4'}/>
                </div>
                <div  className="checkBox__box" >
                    <h2 className="checkBox__name" >Как вы узнали о мероприятие?</h2>
                    <InvestorCheck title={'Инстаграм'} name={'checkbox5'}/>
                    <InvestorCheck title={'ТВ, Радио'} name={'checkbox6'}/>
                    <InvestorCheck title={'Новостные порталы'} name={'checkbox7'}/>
                    <InvestorCheck title={'Другое'} name={'checkbox8'}/>
                </div>
            </div>
        </div>

    );
};

export default CheckBox;