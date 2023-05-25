import React, {useState} from 'react';
import "./contanctFace.sass"
const ContactFace = () => {
    const items = ["Да","Нет"]
    const [openContact,setOpenContact] = useState(false)
    const [chooseContact,setChooseContact] = useState('Да')

    const chooseContactFace = (item) => {
         setChooseContact(item)
    }
    return (
        <>
            <div className="contactFace">
                <h4 className="contactFace__h4">Выберите отрасль*</h4>
                <div onClick={() => setOpenContact(!openContact)} className="contactFace__row">
                    <h5 className="contactFace__h5">{chooseContact}</h5>
                    <div className={`contactFace__tick ${openContact ? 'contactFace__tick_active' : ''} `}>
                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 1.66602L6.5 5.33268L1.5 1.66602" stroke="#14181F" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    {
                       openContact  ? <ul className="contactFace__select">
                            {
                                items.map((item) => (
                                    <li  onClick={() => chooseContactFace(item)} className="baseForm__item">{item}</li>
                                ))
                            }

                        </ul> : ''
                    }
                </div>


            </div>

        </>
    );
};

export default ContactFace;