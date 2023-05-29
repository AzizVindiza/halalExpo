import React, {useContext, useState} from 'react';
import "./fashion.sass"
const Fashion = () => {

    const items = ["Модельер одежды", "Дизайнер обуви", "Дизайнер аксессуаров", "Основатель бренда", "Крупный производитель",]

    const [fashion,setFashion] = useState('Производство')
    const {fashionOpen,setFashionOpen} = useState(false)
    return (

            <>
                <div className="fashion">
                    <h4 className="fashion__h4">Выберите отрасль*</h4>
                    <div onClick={() => setFashionOpen(!fashionOpen)} className="fashion__row">
                       <select className="fashion__select">
                                {
                                    items.map((item,i) => (
                                        <option value={i}  key={i}className="fashion__item">{item}</option>
                                    ))
                                }

                            </select>
                    </div>


                </div>

            </>


    );
};

export default Fashion;