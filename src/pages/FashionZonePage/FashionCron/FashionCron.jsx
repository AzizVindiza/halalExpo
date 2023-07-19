import React, {useContext} from 'react';
import "./fashionCron.sass"
import fashion from "../img/fashionbg.png"
import {CustomContext} from "../../../Context";



const FashionCron = () => {
    const {setRequest, request} = useContext(CustomContext)
    return (
        <section className="fashionCron">
            <div className="fashionCron__container container">
                <h2 className="fashionCron__h2">Кронштейны</h2>
                <div className="fashionCron__wrapper">
                    <div className="fashionCron__img">
                        <img src={fashion} alt=""/>
                    </div>
                    <div className="fashionCron__box">
                        <h3 className="fashionCron__h3">
                            Количество мест: 20
                        </h3>
                        <ul className="fashionCron__ul">
                            <li className="fashionCron__li">
                                Дефиле до 3-х нарядов в один день
                            </li>
                            <li className="fashionCron__li">
                                Гримерка -Профессиональная фотосессия
                            </li>
                            <li className="fashionCron__li">
                                Видеоролик + монтаж

                            </li>
                            <li className="fashionCron__li">
                                Участие на B2B встречах
                            </li>
                        </ul>
                        <button className="fashionCron__btn">
                            $800
                        </button>
                    </div>
                    <div className="fashionCron__row">
                        <p className={"fashionCron__p"}>
                            *Участники Fashion zone самостоятельно подбирают моделей для дефиле <br/>
                            **Обеспечение площади стендов кронштейнами и другой мебелью остается на усмотрение участников
                        </p>

                    </div>




                </div>
                <div className="investCard__box">
                    <p className="investCard__p">
                        Стоимость участия с учетом раннего бронивания актуальна до 20 июля
                    </p>
                    <button onClick={() => setRequest(true)} className="investCard__btn">
                        Перейти к пакетам
                    </button>
                </div>

            </div>



        </section>
    );
};

export default FashionCron;