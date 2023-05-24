import React, {useState} from 'react';
import {createContext} from "react";

export  const CustomContext = createContext()
const Context = (props) => {
    const [close,setClose] = useState(false) // close register
    const [stake,setStake] = useState(false) // close register
    const [branch,setBranch] = useState(false) // close register
    const [changeComponent,setChangeComponent] = useState(false) // change component
    const valueContext = {
        close,setClose,stake,setStake,branch,setBranch,changeComponent,setChangeComponent
    }
    return <CustomContext.Provider value={valueContext}>
        {props.children}
    </CustomContext.Provider>
};

export default Context;