import React from 'react';
import './TradeZoneCard.sass'

const TradeZoneCard = ({item}) => {
    return (
        <div className={"tradeZoneCard"}>
            <div className="tradeZoneCard__box">
                <div className="tradeZoneCard__row">
                    <h2 className="tradeZoneCard__h2">Стандарт</h2>
                    <span className="tradeZoneCard__span">9м2</span>
                </div>
                <div className="tradeZoneCard__flex">

                    <div className="tradeZoneCard__img">
                        <img src={item.img} alt=""/>
                        <h3 className="tradeZoneCard__h3">
                            $2400
                        </h3>
                    </div>
                    <ul className="tradeZoneCard__ul">
                        {item.li.map((item,idx)=>(
                            <li key={idx} className="tradeZoneCard__li">{item}</li>
                        ))}

                    </ul>
                </div>


            </div>

        </div>
    );
};

export default TradeZoneCard;