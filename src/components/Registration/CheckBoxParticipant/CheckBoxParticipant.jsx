import React from 'react';
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBoxParticipant = () => {
    return (
        <div className="checkBox">
            <h2 className="checkBox__name" >Какие преимущества и возможности выставки вас заинтересовали?</h2>
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <InvestorCheck theme={'label'} title={'Присутствие инвесторов'} name={'benefits_one'}/>
                    <InvestorCheck theme={'label'} title={'Присутствие государственных органов'} name={'benefits_two'}/>
                    <InvestorCheck theme={'label'} title={'Выход на мировой рынок'} name={'benefits_three'}/>
                    <InvestorCheck theme={'label'} title={'Реализация продукции'} name={'benefits_for'}/>
                    <InvestorCheck theme={'label'} title={'Возможность получения инвестиции'} name={'benefits_five'}/>
                </div>
                <div  className="checkBox__box" >
                    <InvestorCheck title={'Расширение бизнеса'} name={'benefits_six'}/>
                    <InvestorCheck title={'Коммуникация с другми участниками'} name={'benefits_seven'}/>
                    <InvestorCheck title={'Программа'} name={'benefits_eight'}/>
                    <InvestorCheck title={'Место и формат проведения'} name={'benefits_nine'}/>
                    <InvestorCheck title={'Возможность получения номинации'} name={'benefits_ten'}/>
                </div>
            </div>
        </div>
    );
};

export default CheckBoxParticipant;