import React, {useState} from 'react';
import "./europe.sass"
const Europe = () => {
    const items = ["Европейская", "Национальная", "Fast food", "Азиатская", "Турецкая","Кофейня"]

    const [europe,setEurope] = useState('Европейская')
    const {europeOpen,setEuropeOpen} = useState(false)
    return (
        <>
            <div className="europe">
                <h4 className="europe__h4">Выберите отрасль*</h4>

            <select className="europe__select">
                            {
                                items.map((item) => (
                                    <option  className="europe__item">{item}</option>
                                ))
                            }

            </select>

            </div>

        </>
    );
};

export default Europe;