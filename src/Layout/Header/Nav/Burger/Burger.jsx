import React from 'react';
import "./burger.sass"
const Burger = ({toogleClass,isActiveHamburger}) => {

    return (
        <div className={`burger ${isActiveHamburger ? "burger_active" : null}`} onClick={toogleClass}>
            <div className="burger__line"></div>
            <div className="burger__line burger__line_short"></div>
            <div className="burger__line"></div>
        </div>
    );
};

export default Burger;