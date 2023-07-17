import React from 'react';
import "./zoneCard2.sass"
import calendar from "../calender2.svg";
import part from "../part.svg";
import trade from "../trade.png";
import lineL from "../line2.png";
import {NavLink} from "react-router-dom";

const ZoneCard2 = ({item,img,link}) => {
    return (
        <div className={'zona2'}>
            <div className="zona2__left">
                <h2 className="zona2__h2">
                    {item.name}
                </h2>
                <div className="zona2__row">
                    <div className="zona__flex">
                                    <span className={"zona__span"}>
                                        <img src={calendar} alt=""/>
                                    </span>
                        <h3 className="zona__h3">
                            {item.time}
                        </h3>
                    </div>
                    <div className="zona__flex">
                                    <span className={"zona__span"}>
                                        <img src={part} alt=""/>
                                    </span>
                        <h3 className="zona__h3">
                            {item.participant}
                        </h3>
                    </div>
                </div>
                <ul className="zona2__ul">
                    {
                        item.li.map((item,i)=>(
                            <li key={i} className={"zona2__li"}>{item}</li>
                        ))
                    }
                </ul>
                <NavLink to={link} className="zona2__b">
                    <button className="zona2__btn">
                        {item.btn}<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49938 16.0103C8.22323 16.0106 7.99968 16.2348 8.00006 16.5109C8.00044 16.7871 8.2246 17.0106 8.50075 17.0103L8.49938 16.0103ZM23.854 16.8428C24.049 16.6472 24.0486 16.3307 23.8531 16.1357L20.6667 12.9581C20.4712 12.7631 20.1546 12.7635 19.9596 12.959C19.7646 13.1545 19.7651 13.4711 19.9606 13.6661L22.7929 16.4907L19.9683 19.323C19.7733 19.5185 19.7738 19.8351 19.9693 20.0301C20.1648 20.2251 20.4814 20.2246 20.6764 20.0291L23.854 16.8428ZM8.50075 17.0103L23.5007 16.9897L23.4993 15.9897L8.49938 16.0103L8.50075 17.0103Z" fill="white"/>
                        <rect x="0.5" y="0.5" width="31" height="32" rx="15.5" stroke="white"/>
                    </svg>

                    </button>
                </NavLink>
            </div>
            <div className="zona2__right">
                <div className="zona2__img">
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className="zona2__overlay">
                <img className="zona__overlay_img" src={lineL} alt=""/>
            </div>
        </div>
    );
};

export default ZoneCard2;