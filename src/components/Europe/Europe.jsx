import React, {useState} from 'react';
import "./europe.sass"
const Europe = () => {
    const items = ["Европейская", "Национальная", "Fast food", "Азиатская", "Турецкая","Кофейня"]

    const [europe,setEurope] = useState('Европейская')
    const {europeOpen,setEuropeOpen} = useState(false)
    const clickEurope = (item) => {
        setEurope(item)
    }
    return (
        <>
            <div className="europe">
                <h4 className="europe__h4">Выберите отрасль*</h4>
                <div onClick={() => setEuropeOpen(true)} className="europe__row">
                    <h5 className="europe__h5">{europe}</h5>
                    <div className={`europe__tick ${europeOpen ? 'europe__tick_active' : ''} `}>
                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 1.66602L6.5 5.33268L1.5 1.66602" stroke="#14181F" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    {
                        europeOpen ? <ul className="europe__select">
                            {
                                items.map((item) => (
                                    <li  onClick={() => clickEurope(item)} className="europe__item">{item}</li>
                                ))
                            }

                        </ul> : ''
                    }
                </div>


            </div>

        </>
    );
};

export default Europe;