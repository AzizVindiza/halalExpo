import React from 'react';
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBoxSmi = () => {
    return (
        <div className="checkBox">
            <h2 className="checkBox__name" >Что вас заинтересовала в нашей выставке?:</h2>
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <InvestorCheck theme={'label'} title={'Стать частью информационной поддержки'} name={'smi_one'}/>
                    <InvestorCheck theme={'label'} title={'Знакомство с новыми компаниями'} name={'smi_two'}/>
                    <InvestorCheck theme={'label'} title={'Освещение и полезная информация'} name={'smi_three'}/>
                    <InvestorCheck theme={'label'} title={'Участие на пресс-конференции'} name={'smi_four'}/>
                </div>
            </div>
        </div>
    );
};

export default CheckBoxSmi;