import React from 'react';
import standard from "../standard.png";
import Btn from "../../../../components/Btn/Btn";

const StCardBox = ({card}) => {

    return (
        <div className="stCard__box">
            <div className="stCard__title"><h3 className="stCard__h3">{card.name}</h3><span>{card.meter}</span></div>

            <div className="stCard__row">
                <div className="stCard__img">
                    <img src={standard} alt=""/>
                </div>
                <div className="stCard__right">

                    <ul className="stCard__ul">

                        {card.li.map((item,idx)=>(
                            <li key={idx} className="stCard__li">{item}</li>
                        ))}


                        {/*{card.list && card.list.map((el,i)=>(*/}

                        {/*    <li key={i} className="stCard__li">{el}</li>*/}
                        {/*))}*/}

                    </ul>
                    <div className="stCard__price">{card.discount ? <div className={"stCard__price_new"}><span className={"stCard__discount"}>{card.discount}</span ><span className={"stCard__percent"}>-30%</span></div>: ''} {card.price}  </div>

                    <Btn m={'stand'} type="button" text="Забронировать стенд"/>



                </div>

            </div>

        </div>
    );
};

export default StCardBox;