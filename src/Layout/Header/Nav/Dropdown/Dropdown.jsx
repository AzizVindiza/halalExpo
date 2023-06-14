import React, {useContext} from 'react';
import "./Dropdown.sass"
import {NavLink} from "react-router-dom";
import {CustomContext} from "../../../../Context";

const Dropdown = ({arr, txt}) => {
    const { setActiveHamburger} = useContext(CustomContext)

    return (
        <div className="dropdown">
            <button className={'nav__link nav__linkBtn'}>{txt}
                <span className='nav__line'>
                            <svg className={`dropdown__rotate`} width="8"
                                 height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L4 3L7 1" stroke="black"/>
</svg>

                    </span>
            </button>
            <div className="dropdown__wrapper">
                {
                    arr.map((item, i) => (
                        <NavLink onClick={() => setActiveHamburger(false)} key={i} className={'dropdown__link'} to={item.link}>
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>

        </div>
    );
};

export default Dropdown;