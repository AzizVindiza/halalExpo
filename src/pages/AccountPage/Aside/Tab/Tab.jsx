import React from 'react';
import {NavLink} from "react-router-dom";
import "./tab.sass"
const Tab = ({item}) => {
    const url = "../asserts/accountsIcon/"
    return (
        <div className={'tab'}>
            <div className="container tab__container">
                {
                    item.map((item) => {
                        return (
                            <NavLink className={({isActive}) => (
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
            </div>
        </div>
    );
};

export default Tab;