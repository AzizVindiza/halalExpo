import React, {useState,useEffect} from 'react';
import "./MembersPage.sass"
import MembersCard from "./MembercCard/MembersCard";
import SelectSection from "./SelectSection/SelectSection";
import "react-phone-input-2/lib/bootstrap.css";
import {arr,arr2,arr4,arr3,arr5} from "../../utils/arr";
import CountryFlag from "./CountryFlag";
import ChooseZone from "./ZoneSection/ZoneSection";
import axios from "axios";
const MembersPage = () => {
    const [phoneSelect,setPhoneSelect] = useState('')
    const [category,setCategory] = useState('- Категории -') // choose category
    const [zone,setZone] = useState('- Зоны -') // choose
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios
            .get("https://shark-app-65hkc.ondigitalocean.app/user/")
            .then((res) => setUsers(res.data))
            .catch(err => {
                console.log(err.message);
            });
    }, []);
    return (
        <section className="members">
            <div className="container members__container">
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
                    <h4 className="members__h4">Участников {users.filter((obj)=> obj.type_register === "Участник").length} </h4>
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
                    {
                        users.filter((obj)=> obj.type_register === "Участник").map((obj)=>(
                            <MembersCard obj={obj}/>
                        ))
                    }

                </div>
            </div>
            </div>
        </section>
    );
};

export default MembersPage;