import React, {useRef, useState} from 'react';
import "./Dropdown.sass"
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
const Dropdown = ({arr,txt}) => {
    const ref = useRef()
    const [active,setActive] = useState(false)




    useEffect(() => {
        const handleClickOutside = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (ref && !ref.current.contains(event.target) && active) {
                setActive(false);
            }
        };
        // When user click any place in document
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Clean it on rerender
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, active, setActive]);

    return (
        <div ref={ref} className="dropdown">

            <button    onClick={(e) => {
                e.preventDefault();
                setActive(!active);


            }}  className={'nav__link nav__link_btn nav'}>{txt}
                <span className='nav__line'>
                            <svg className={`dropdown__rotate ${active ? 'dropdown__rotate_change' : ''}`} width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L4 3L7 1" stroke="black"/>
</svg>

                    </span>
            </button>
            {
                active ?    <div className="dropdown__wrapper">
                    {
                        arr.map((item) => (
                            <NavLink onClick={() => setActive(false)} className={'dropdown__link'} to={item.link}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div> : ''

            }

        </div>
    );
};

export default Dropdown;