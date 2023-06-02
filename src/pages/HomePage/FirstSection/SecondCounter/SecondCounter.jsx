import React, {useEffect, useRef, useState} from 'react';

import {AiOutlineArrowRight} from "react-icons/ai"
import "./secondCounter.sass"
const SecondCounter = () => {

    return (
        <section className={'secondCounter'}>
            <h2 className={'secondCounter__h2'}>Оставшихся мест участников</h2>
            <div className="secondCounter__wrapper">
                 <h4 className="secondCounter__h4">1024</h4>
            </div>
            <div className="secondCounter__block">
                <h3 className="secondCounter__h3">Принять участие</h3>
                <AiOutlineArrowRight color={"#ffffff"}/>
            </div>

        </section>
    );
};

export default SecondCounter