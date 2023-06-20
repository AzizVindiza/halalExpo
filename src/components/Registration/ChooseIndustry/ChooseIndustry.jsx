import React from 'react';
import InvestorCheck from "../../InvesntorCheck/InvestorCheck";
import "./chooseIndustry.sass"
const ChooseIndustry = () => {
    return (
        <div className={'chooseIndustry'}>
            <h2 className="chooseIndustry__h2">Выберите отрасль <span className={'chooseIndustry__star'}>*</span></h2>
            <div className="chooseIndustry__wrapper">
                <InvestorCheck title={'Производство + сельхоз'} name={'agricultural_production'}/>
                <InvestorCheck title={'Строительство'} name={'construction'}/>
                <InvestorCheck title={'Строительство + техника'} name={'technique'}/>
                <InvestorCheck title={'Текстиль, обувь и аксессуары'} name={'textiles'}/>
                <InvestorCheck title={'Образование'} name={'education'}/>
                <InvestorCheck title={'Медицина'} name={'medicine'}/>
                <InvestorCheck title={'Туризм'} name={'tourism'}/>
                <InvestorCheck title={'Эко'} name={'echo'}/>
                <InvestorCheck title={'IT'} name={'it'}/>
                <InvestorCheck title={'Банки'} name={'banks'}/>
                <InvestorCheck title={'КФХ'} name={'kfx'}/>
                <InvestorCheck title={'КРС'} name={'krc'}/>
                <InvestorCheck title={'Машиностроение'} name={'machinery'}/>
                <InvestorCheck title={'industry'} name={'industry'}/>
            </div>
        </div>
    );
};

export default ChooseIndustry;