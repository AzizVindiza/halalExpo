import React, {useRef, useState} from 'react';
import {createContext} from "react";
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
    const [demo,setDemo] = useState('')
    const [isActiveHamburger, setActiveHamburger] = useState(false); // open and close hamburger
    const [isActiveHamburgerMenu, setActiveHamburgerMenu] = useState(false); //open burger menu
    const [openModal,setOpenModal] = useState(false)// open modal in members card
    const [chooseZone,setChooseZone] = useState('') // get zone in account
    const [other,setOther] = useState(false) // choose others activity
    const [checkBoxZone,setCheckBoxZone] = useState(false) // choose others activity
    const [state,setState] = useState("default") // next in formZone
    const [chooseIndustry,setChooseIndustry] = useState("") // choose industry
    const [_,setClickZone] = useState() //  do swiper true
    const [fileCompany,setFileCompany ] = useState(null)






    const valueContext = {
        role,setRole,close,setClose,stake,setStake,branch,setBranch,login,setLogin,passwordShown,
        setPasswordShown,
        passwordShown2, setPasswordShown2,
        value,setValue,burger,setBurger,members,setMembers,fashion,setFashion,food,setFood
        ,checkBox,setCheckBox,request,setRequest,demo,setDemo,isActiveHamburger,setActiveHamburger,isActiveHamburgerMenu,
        setActiveHamburgerMenu,openModal,setOpenModal,chooseZone,setChooseZone,other,setOther,
        checkBoxZone,setCheckBoxZone,state,setState,chooseIndustry,setChooseIndustry,setClickZone,
        fileCompany,setFileCompany

    }
    return <CustomContext.Provider value={valueContext}>
        {props.children}
    </CustomContext.Provider>
};

export default Context;