import React, {useContext, useState} from 'react';
import {CustomContext} from "../../Context";
import "./state.sass"
const Stake = () => {
    const array = [" Trade", "СМИ", " Investment", " Fashion", "Food"]
    const [value,setValue] = useState('Trade')
    const {stake,setStake} = useContext(CustomContext)

    const chooseStake = (item) => {
         setValue(item)
    }
    return (
        <>
            <div className="state">
                <h4 className="state__h4">Выберите сектор участия (с условиями участия каждого сектора можно ознакомится)*</h4>
                <div onClick={() => setStake(!stake)} className="state__row">
                    <h5 className="state__h5">{value}</h5>
                    <div className={`state__tick ${stake ? 'state__tick_active' : ''} `}>
                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 1.66602L6.5 5.33268L1.5 1.66602" stroke="#14181F" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    {
                        stake ? <ul className="state__select">
                            {
                                array.map((item) => (
                                    <li onClick={() => chooseStake(item)} className="baseForm__item">{item}</li>
                                ))
                            }

                        </ul> : ''
                    }
                </div>


            </div>

        </>
    );
};

export default Stake;