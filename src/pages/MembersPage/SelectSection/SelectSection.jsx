import React, {useEffect, useRef, useState} from 'react';
import "./selectSection.sass"

const   SelectSection = ({category,setCategory,arr}) => {

    const ref = useRef()
    const [select,setSelect] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (ref && !ref.current.contains(event.target) &&  select) {
                setSelect(false);
            }
        };
        // When user click any place in document
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Clean it on rerender
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, select, setSelect ]);
    return (
        <section className={'selectSection'}>
            <div className="selectSection__container container">
                <div ref={ref} onClick={() => setSelect(!select)} className="selectSection__category">
                    <h2 className="selectSection__h2">{category}</h2>
                    <div className="selectSection__line">
                        <div className="selectSection__svg">
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 4L5 1L1 4" stroke="black"/>
                            </svg>
                        </div>
                        <div className="selectSection__svg">
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 4L9 1" stroke="black"/>
                            </svg>
                        </div>
                    </div>
                    {
                        select ?
                            <ul className="selectSection__list">
                                {
                                   arr ? arr.map((item) => (
                                        <li onClick={() => setCategory(item)} className="selectSection__item">{item}</li>
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

export default SelectSection;