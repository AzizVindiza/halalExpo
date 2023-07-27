import React from 'react';
import "./tradeText.sass"

const TradeText = ({item}) => {
    return (
        <div className={"tradeText"}>
            <div className="tradeText__box">
                <h2 className="tradeText__h2">
                    {item.h2}
                </h2>
                <p className="tradeText__p">
                    {item.p}
                </p>
            </div>

        </div>
    );
};

export default TradeText;