import React from 'react';
import "./tradeCard.sass"
import regis from "../../img/regis.svg"




const TradeCard = ({item}) => {
    return (
        <div className={"tradeCard"}>
            <div className="tradeCard__box">
                <div className="tradeCard__img">
                    <img src={item.img} alt=""/>
                </div>
                <h2 className="tradeCard__h2">
                    {item.h2}
                </h2>
            </div>



        </div>
    );
};

export default TradeCard;