import React from 'react';
import './transferCard.sass'


const TransferCard = ({item}) => {
    return (
        <div className={"transferCard"}>
            <div className="transferCard__wrapper">
                <div className="transferCard__box">
                    <div className="transferCard__img">
                        <img src={item.img} alt=""/>
                    </div>
                    <span className="transferCard__span">{item.count}</span>
                </div>
                <p className="transferCard__p">{item.p}</p>
            </div>

        </div>
    );
};

export default TransferCard;