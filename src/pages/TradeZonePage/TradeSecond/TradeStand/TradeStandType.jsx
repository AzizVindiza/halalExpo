import React from 'react';
import './TradeStandType.sass'

const TradeStandType = ({stand}) => {
    return (
        <div className={`tradeStandType tradeStandType__${stand.name}`}>
            <div className="tradeStandType__h5">Обзор стенда {stand.per}%</div>
            <h2 className="tradeStandType__h2">{stand.name}</h2>
            <h3 className="tradeStandType__h3">{stand.place}</h3>
            <h3 className="tradeStandType__h3">{stand.size}</h3>
            {stand.lists.map((list)=>{
                return <>
                    <h3 className="tradeStandType__ul-title">{list.title}</h3>
                    <ul className={"tradeStandType__ul"}>
                        {list.li.map((li)=>(
                            <li className={"tradeStandType__li"}>{li}</li>
                        ))}
                    </ul>
                </>

            })}


        </div>
    );
};

export default TradeStandType;