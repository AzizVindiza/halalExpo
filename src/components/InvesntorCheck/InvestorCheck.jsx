import React from 'react';
import "./InvestorCheck.sass"
const InvestorCheck = () => {
    const arr = ['Производство + сельхоз',"Строительство","Строительство + техника","Текстиль, обувь и аксессуары","Текстиль, обувь и аксессуары","Образование","Медицина","Туризм","Туризм","IT","Банки","КФХ","КРС","Машиностроение","Текстильное промышленность"]
    return (
        <div className={'investorCheck'}>
            <h2 className="investorCheck__h2">Выберите отрасль <span className={'investorCheck__red'}>*</span></h2>
            <div className="investorCheck__wrapper">
                <div className="investorCheck__first">
                        {
                            arr.map((item) => (
                                <label className="investorCheck__label">
                                    <input className={'investorCheck__check'} type="checkbox"/>
                                    <span className="investorCheck__span">{item}</span>
                                </label>
                            ) )
                        }
                </div>
                <div className="investorCheck__second"></div>
            </div>
        </div>
    );
};

export default InvestorCheck;