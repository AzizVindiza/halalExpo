import React, {useState} from 'react';
import {createContext} from "react";
import {useTranslation} from "react-i18next";
export  const CustomContext = createContext()
const Context = (props) => {
    const [burger,setBurger] = useState(false)
    const [role,setRole] = useState("")
    const [close,setClose] = useState(false) // close register
    const [stake,setStake] = useState(false) // close register
    const [branch,setBranch] = useState(false) // close register
    const [login,setLogin] = useState(false) // close register
    const [passwordShown, setPasswordShown] = useState(false); // active eye
    const [passwordShown2, setPasswordShown2] = useState(false); // active eye
    const [value,setValue] = useState('Trade')
    const {t,i18n} = useTranslation()


    const valueContext = {
        role,setRole,close,setClose,stake,setStake,branch,setBranch,login,setLogin,passwordShown,
        setPasswordShown,
        passwordShown2, setPasswordShown2,
        value,setValue,burger,setBurger,t,i18n
    }
    return <CustomContext.Provider value={valueContext}>
        {props.children}
    </CustomContext.Provider>
};

export default Context;