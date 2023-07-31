import React from 'react';
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBoxParticipant = () => {
    return (
        <div className="checkBox">
            <h2 className="checkBox__name" >Какие преимущества и возможности выставки вас заинтересовали?</h2>
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <InvestorCheck theme={'label'} title={'Присутствие инвесторов'} name={'bool_company_one'}/>
                    <InvestorCheck theme={'label'} title={'Присутствие государственных органов'} name={'bool_company_two'}/>
                    <InvestorCheck theme={'label'} title={'Выход на мировой рынок'} name={'bool_company_three'}/>
                    <InvestorCheck theme={'label'} title={'Реализация продукции'} name={'bool_company_four'}/>
                    <InvestorCheck theme={'label'} title={'Возможность получения инвестиции'} name={'bool_company_five'}/>
                </div>
                <div  className="checkBox__box" >
                    <InvestorCheck title={'Расширение бизнеса'} name={'bool_company_six'}/>
                    <InvestorCheck title={'Коммуникация с другми участниками'} name={'bool_company_seven'}/>
                    <InvestorCheck title={'Программа'} name={'bool_company_eight'}/>
                    <InvestorCheck title={'Место и формат проведения'} name={'bool_company_nine'}/>
                    <InvestorCheck title={'Возможность получения номинации'} name={'bool_company_ten'}/>
                </div>
            </div>
        </div>
    );
};

export default CheckBoxParticipant;