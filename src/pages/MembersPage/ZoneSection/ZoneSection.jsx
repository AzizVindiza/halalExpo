import React, {useEffect, useRef, useState} from 'react';
import {arr} from "../../../utils/arr";
import "./selectZone.sass"
const ChooseZone = ({items,zone,setZone}) => {
    const ref = useRef()
    const [selectZone,setSelectZone] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (ref && !ref.current.contains(event.target) &&  zone) {
                setSelectZone(false);
            }
        };
        // When user click any place in document
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Clean it on rerender
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, setZone, zone ]);
    return (

            <section className={'zone'}>
                <div className="zone__container container">
                    <div ref={ref} onClick={() => setSelectZone(!selectZone)} className="selectSection__category">
                        <h2 className="zone__h2">{zone}</h2>
                        <div className="zone__line">
                            <div className="zone__svg">
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 4L5 1L1 4" stroke="black"/>
                                </svg>
                            </div>
                            <div className="zone__svg">
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 4L9 1" stroke="black"/>
                                </svg>
                            </div>
                        </div>
                        {
                            selectZone ?
                                <ul className="zone__list">
                                    {
                                        items ? items.map((item) => (
                                            <li onClick={() => setZone(item)} className="selectSection__item">{item}</li>
                                        )) : <li> вы не выбрали зону</li>
                                    }

                                </ul>
                                : ''
                        }

                    </div>

                </div>
            </section>

    );
};

export default ChooseZone;