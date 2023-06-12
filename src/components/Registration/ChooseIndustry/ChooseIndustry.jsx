import React from 'react';
import InvestorCheck from "../../InvesntorCheck/InvestorCheck";
import "./chooseIndustry.sass"
const ChooseIndustry = () => {
    return (
        <div className={'chooseIndustry'}>
            <h2 className="chooseIndustry__h2">Выберите отрасль <span className={'chooseIndustry__star'}>*</span></h2>
            <div className="chooseIndustry__wrapper">
                <InvestorCheck title={'Производство + сельхоз'} name={'checkbox_industry'}/>
                <InvestorCheck title={'Строительство'} name={'checkbox_industry2'}/>
                <InvestorCheck title={'Строительство + техника'} name={'checkbox_industry3'}/>
                <InvestorCheck title={'Текстиль, обувь и аксессуары'} name={'checkbox_industry4'}/>
                <InvestorCheck title={'Образование'} name={'checkbox_industry5'}/>
                <InvestorCheck title={'Медицина'} name={'checkbox_industry6'}/>
                <InvestorCheck title={'Туризм'} name={'checkbox_industry7'}/>
                <InvestorCheck title={'Эко'} name={'checkbox_industry8'}/>
                <InvestorCheck title={'IT'} name={'checkbox_industry9'}/>
                <InvestorCheck title={'Банки'} name={'checkbox_industry10'}/>
                <InvestorCheck title={'КФХ'} name={'checkbox_industry11'}/>
                <InvestorCheck title={'КРС'} name={'checkbox_industry12'}/>
                <InvestorCheck title={'Машиностроение'} name={'checkbox_industry13'}/>
                <InvestorCheck title={'Текстильное промышленность'} name={'checkbox_industry14'}/>
            </div>
        </div>
    );
};

export default ChooseIndustry;