import React from 'react';
import Requisites from "./Requisites/Requisites";
import "./buyTicket.sass"
import Steps from "./Steps/Steps";

const BuyTicket = () => {
    return (
        <div className={"buyTicket"}>
            <div className="buyTicket__container">
                <Requisites/>
                <Steps/>

            </div>

            
        </div>
    );
};

export default BuyTicket;