import React, {useState} from 'react';
import {createContext} from "react";

export  const CustomContext = createContext()
const Context = (props) => {
    const [close,setClose] = useState(false) // close register
    const [stake,setStake] = useState(false) // close register
    const [branch,setBranch] = useState(false) // close register
    const [login,setLogin] = useState(false) // close register
    const [passwordShown, setPasswordShown] = useState(false); // active eye

    const valueContext = {
        close,setClose,stake,setStake,branch,setBranch,login,setLogin,passwordShown, setPasswordShown
    }
    return <CustomContext.Provider value={valueContext}>
        {props.children}
    </CustomContext.Provider>
};

export default Context;