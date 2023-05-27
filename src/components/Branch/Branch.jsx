import React, {useContext, useState} from 'react';
import {CustomContext} from "../../Context";
import "./branch.sass"

const Branch = () => {
    const items = ["  Производство", "    Строительство", " Банковская деятельность", "     Одежда, обувь и аксесссуары", "   Текстиль",
        "    Экопродукты", "  Спорт и игры", "ИТ-технологии", "   Текстиль", "  Искусство", "   Текстиль" ,"   Робототехника","  Научная деятельность","    Медицина"," Фармацевтика и косметические товары","    Образование"]

    const [chooseBranch,setChooseBranch] = useState('Производство')
    const {branch,setBranch} = useContext(CustomContext)

    const chooseBranchValue = (item) => {
        setChooseBranch(item)
    }
    return (

            <>
                <div className="branch">
                    <h4 className="branch__h4">Выберите отрасль<span className={'branch__span'}>*</span></h4>
                    <div onClick={() => setBranch(!branch)} className="branch__row">
                        <h5 className="branch__h5">{chooseBranch}</h5>
                        <div className={`branch__tick ${branch ? 'branch__tick_active' : ''} `}>
                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 1.66602L6.5 5.33268L1.5 1.66602" stroke="#14181F" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                        {
                            branch ? <ul className="branch__select">
                                {
                                    items.map((item,i) => (
                                        <li key={i} onClick={() => chooseBranchValue(item)} className="baseForm__item">{item}</li>
                                    ))
                                }

                            </ul> : ''
                        }
                    </div>


                </div>

            </>

    );
};

export default Branch;