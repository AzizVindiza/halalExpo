import React from 'react';
import './checkBox.sass'
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBox = () => {
    return (
        <div className="checkBox">
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <h2 className="checkBox__name" >Я заинтересован в</h2>
                    <InvestorCheck theme={'label'} title={'Посещение на HIT EXPO'} name={'visit'}/>
                    <InvestorCheck theme={'label'} title={'Участие на HIT EXPO'} name={'participation'}/>
                    <InvestorCheck theme={'label'} title={'Поиске проектов'} name={'projects'}/>
                    <InvestorCheck theme={'label'} title={'Другое'} name={'other_one'}/>
                </div>
                <div  className="checkBox__box" >
                    <h2 className="checkBox__name" >Как вы узнали о мероприятие?</h2>
                    <InvestorCheck title={'ТВ, Радио'} name={'tv_radio'}/>
                    <InvestorCheck title={'Новостные порталы'} name={'news_portals'}/>
                    <InvestorCheck title={'Другое'} name={'other_two'}/>
                </div>
            </div>
        </div>

    );
};

export default CheckBox;