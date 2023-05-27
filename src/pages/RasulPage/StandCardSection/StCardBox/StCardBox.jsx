import React from 'react';
import standard from "../standard.png";
import Btn from "../../../../components/Btn/Btn";

const StCardBox = ({card}) => {
    return (
        <div className="stCard__box">
            <h3 className="stCard__h3">{card.name}</h3>
            <div className="stCard__row">
                <div className="stCard__img">
                    <img src={standard} alt=""/>
                </div>
                <div className="stCard__right">
                    <div className="stCard__title"   >
                        <h4 className="stCard__h4">
                            {card.pocket}
                        </h4>
                        <span    className="stCard__span">
                           {card.meter}
                       </span>
                    </div>

                    <ul className="stCard__ul">

                        <li className="stCard__li">Стенды по периметру</li>
                        <li className="stCard__li">Стойка для ресепшн</li>
                        <li className="stCard__li">Полки</li>
                        <li className="stCard__li">Логотип</li>
                        <li className="stCard__li">Логотип компании</li>
                        {/*{card.list && card.list.map((el,i)=>(*/}

                        {/*    <li key={i} className="stCard__li">{el}</li>*/}
                        {/*))}*/}

                    </ul>
                    <div className="stCard__price">$5298</div>

                    <Btn m={'stand'} type="button" text="Забронировать стенд"/>



                </div>

            </div>

        </div>
    );
};

export default StCardBox;