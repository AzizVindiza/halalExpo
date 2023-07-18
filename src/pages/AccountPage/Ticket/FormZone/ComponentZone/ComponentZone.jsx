import React, {useContext} from 'react';
import {CustomContext} from "../../../../../Context";
import Hello from "./Hello";
import Second from "./Second";
import {useNavigate} from "react-router-dom";
import FormZone from "../FormZone";

const ComponentZone = () => {
    const {chooseZone} = useContext(CustomContext)
    const navigate = useNavigate()
    return (
        <div>
            {
                chooseZone === "Trade" ? <Hello/> : chooseZone === 'Invest' ? <Second/> : <FormZone/>
            }
            
        </div>
    );
};

export default ComponentZone;