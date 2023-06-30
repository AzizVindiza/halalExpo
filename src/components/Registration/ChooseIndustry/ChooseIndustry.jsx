import React from 'react';
import InvestorCheck from "../../InvesntorCheck/InvestorCheck";
import "./chooseIndustry.sass"
const ChooseIndustry = () => {
    return (
        <div className={'chooseIndustry'}>
            <h2 className="chooseIndustry__h2">Выберите отрасль <span className={'chooseIndustry__star'}>*</span></h2>
            <div className="chooseIndustry__wrapper">
                <InvestorCheck theme={'second'} title={'Производство + сельхоз'} name={'agricultural_production'}/>
                <InvestorCheck theme={'second'} title={'Строительство'} name={'construction'}/>
                <InvestorCheck theme={'second'} title={'Строительство + техника'} name={'technique'}/>
                <InvestorCheck theme={'second'} title={'Текстиль, обувь и аксессуары'} name={'textiles'}/>
                <InvestorCheck theme={'second'} title={'Образование'} name={'education'}/>
                <InvestorCheck theme={'second'} title={'Медицина'} name={'medicine'}/>
                <InvestorCheck theme={'second'} title={'Туризм'} name={'tourism'}/>
                <InvestorCheck theme={'second'} title={'Эко'} name={'echo'}/>
                <InvestorCheck theme={'second'} title={'IT'} name={'it'}/>
                <InvestorCheck theme={'second'} title={'Банки'} name={'banks'}/>
                <InvestorCheck theme={'second'} title={'КФХ'} name={'kfx'}/>
                <InvestorCheck theme={'second'} title={'КРС'} name={'krc'}/>
                <InvestorCheck theme={'second'} title={'Машиностроение'} name={'machinery'}/>
                <InvestorCheck theme={'second'} title={'industry'} name={'industry'}/>
            </div>
        </div>
    );
};

export default ChooseIndustry;