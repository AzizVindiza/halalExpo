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
    const [members,setMembers] = useState('') // select members
    const [industry,setIndustry] = useState('') // select industry
    const [fashion,setFashion] = useState('') // select fashion
    const [food,setFood] = useState('') // select food
    const [checkBox,setCheckBox] = useState('') // getCheckbox
    const [request,setRequest] = useState(false) //  open request
    const {t,i18n} = useTranslation()
    const [demo,setDemo] = useState('')


    const valueContext = {
        role,setRole,close,setClose,stake,setStake,branch,setBranch,login,setLogin,passwordShown,
        setPasswordShown,
        passwordShown2, setPasswordShown2,
        value,setValue,burger,setBurger,t,i18n,members,setMembers,fashion,setFashion,food,setFood
        ,checkBox,setCheckBox,request,setRequest,demo,setDemo
    }
    return <CustomContext.Provider value={valueContext}>
        {props.children}
    </CustomContext.Provider>
};

export default Context;