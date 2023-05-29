import React, {useContext, useState} from 'react';
import "./fashion.sass"
const Fashion = () => {

    const items = ["Модельер одежды", "Дизайнер обуви", "Дизайнер аксессуаров", "Основатель бренда", "Крупный производитель",]

    const [fashion,setFashion] = useState('Производство')
    const {fashionOpen,setFashionOpen} = useState(false)
    const clickFashion = (item) => {
        setFashion(item)
        setFashionOpen(false)
    }
    return (

            <>
                <div className="fashion">
                    <h4 className="fashion__h4">Выберите отрасль*</h4>
                    <div onClick={() => setFashionOpen(!fashionOpen)} className="fashion__row">
                        <h5 className="fashion__h5">{fashion}</h5>
                        <div className={`fashion__tick ${fashionOpen ? 'fashion__tick_active' : ''} `}>
                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 1.66602L6.5 5.33268L1.5 1.66602" stroke="#14181F" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                        {
                            fashion ? <ul className="fashion__select">
                                {
                                    items.map((item) => (
                                        <li  onClick={() => clickFashion(item)} className="fashion__item">{item}</li>
                                    ))
                                }

                            </ul> : ''
                        }
                    </div>


                </div>

            </>


    );
};

export default Fashion;