import React, {useState} from 'react';
import {createContext} from "react";

export  const CustomContext = createContext()
const Context = (props) => {
    const [close,setClose] = useState(false) // close register
    const [stake,setStake] = useState(false) // close register
    const [branch,setBranch] = useState(false) // close register
    const valueContext = {
        close,setClose,stake,setStake,branch,setBranch
    }
    return <CustomContext.Provider value={valueContext}>
        {props.children}
    </CustomContext.Provider>
};

export default Context;