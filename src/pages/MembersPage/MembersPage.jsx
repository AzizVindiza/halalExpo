import React, {useState} from 'react';
import "./MembersPage.sass"
import MembersCard from "./MembercCard/MembersCard";
import SelectSection from "./SelectSection/SelectSection";
import "react-phone-input-2/lib/bootstrap.css";
import {arr,arr2,arr4,arr3,arr5} from "../../utils/arr";
import CountryFlag from "./CountryFlag";
import ChooseZone from "./ZoneSection/ZoneSection";
const MembersPage = () => {
    const [phoneSelect,setPhoneSelect] = useState('')
    const [category,setCategory] = useState('Выберите') // choose category
    const [zone,setZone] = useState('Выберите') // choose category

    return (
        <section className="members">
            <h2 className="members__h2">
                Участники
            </h2>
            <div className="container members__container">
                <div className="members__wrapper">
                    <div className="members__block-component">
                        <CountryFlag/>
                        <ChooseZone setZone={setZone} zone={zone} items={arr}/>
                        <SelectSection arr={zone === 'Trade zone' ? arr2 : zone === 'Invest zone' ? arr3 : zone === 'Fashion zone' ? arr4 : zone === 'Food zone' ? arr5 : ""} category={category} setCategory={setCategory}/>
                    </div>
                    <div className="members__txt">
                        <button className={'members__btn'}>Искать</button>
                        <button className={'members__btn2'}>Сбросить</button>
                    </div>
                </div>
                <div className="members__content">
                    <h3 className="members__h3">Список участников</h3>
                    <h4 className="members__h4">Участников 200 </h4>
                </div>
                <div className="members__wrapp">
                    <div className="members__inner">
                         <h2 className="members__title">Логотип</h2>
                        <h5 className="members__h5">Наименование</h5>
                    </div>
                    <div className="members__flex">
                        <h3 className="members__h3">Страна</h3>
                        <h4 className="members__h3">Категория</h4>
                    </div>
                </div>
                <div className="members__cards">
                    <MembersCard/>
                    <MembersCard/>
                    <MembersCard/>
                    <MembersCard/>
                    <MembersCard/>

                </div>
            </div>

        </section>
    );
};

export default MembersPage;