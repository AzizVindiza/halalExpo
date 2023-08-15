import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import "./tab.sass"
import {useSelector} from "react-redux";
import {CustomContext} from "../../../../Context";
const Tab = ({item}) => {
    const {user} = useSelector((store) => store.user)
    const url = "../asserts/accountsIcon/"
    const {setOpenAside} = useContext(CustomContext)
    return (
        <div className={'tab'}>
            <div className="container tab__container">
                {
                    user.user_type === 2 ?
                    item.filter((el) => el.title !== "Управление участием" && el.title !== 'Документы').map((item) => {
                        return (
                            <NavLink onClick={()=> setOpenAside(false)} key={item} className={({isActive}) => (
                                !isActive ? "tab__links" : "tab__links_active"
                            )} to={item.path}>
                                <div className="tab__svg">
                                    <img src={url + item.svg} alt="tabs-icon" className="tab__img"/>
                                </div>
                                <h2 className="tab__h2">{item.title}</h2>
                            </NavLink>
                        )
                    })  :  user.user_type === 5 ?

                            <>

                            {
                                item.map((item) => {
                                    return (
                                        <NavLink onClick={()=> setOpenAside(false)} key={item} className={({isActive}) => (
                                            !isActive ? "tab__links" : "tab__links_active"
                                        )} to={item.path}>
                                            <div className="tab__svg">
                                                <img src={url + item.svg} alt="tabs-icon" className="tab__img"/>
                                            </div>
                                            <h2 className="tab__h2">{item.title}</h2>
                                        </NavLink>
                                    )
                                })
                            }

                            </>
                            : user.user_type === 1 || user.user_type === 3 || user.user_type === 4 ?

                            <>
                            {
                                item.filter((el) => el.title !== 'Документы' && el.title !== 'Управление участием' && el.title !== "B2B встречи"  && el.title !== "Чат" && el.title !== "Забронировать билет").map((item) => {
                                    return (
                                        <NavLink onClick={()=>setOpenAside(false)} className={({isActive}) => (
                                            !isActive ? "tab__links" : "tab__links_active"
                                        )} to={item.path}>
                                            <div className="tab__svg">
                                                <img src={url + item.svg} alt="tabs-icon" className="tab__img"/>
                                            </div>
                                            <h2 className="tab__h2">{item.title}</h2>
                                        </NavLink>
                                    )
                                })
                            }
                            </> : ""

                }
            </div>
        </div>
    );
};

export default Tab;