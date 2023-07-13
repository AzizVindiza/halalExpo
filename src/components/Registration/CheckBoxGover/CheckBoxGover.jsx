import React from 'react';
import InvestorCheck from "../InvesntorCheck/InvestorCheck";

const CheckBoxGover = () => {
    return (
        <div className="checkBox">
            <h2 className="checkBox__name" >Что вас заинтересовала в нашей выставке?:</h2>
            <div className="checkBox__wrapper">
                <div  className="checkBox__box" >
                    <InvestorCheck theme={'label'} title={'Присутствие инвесторов'} name={'gos_one'}/>
                    <InvestorCheck theme={'label'} title={'Потенциал выставки'} name={'gos_two'}/>
                    <InvestorCheck theme={'label'} title={'Развитие экономики Кыргызстана'} name={'gos_three'}/>
                    <InvestorCheck theme={'label'} title={'Инвестиционные проекты.'} name={'gos_four'}/>
                </div>
            </div>
        </div>
    );
};

export default CheckBoxGover;