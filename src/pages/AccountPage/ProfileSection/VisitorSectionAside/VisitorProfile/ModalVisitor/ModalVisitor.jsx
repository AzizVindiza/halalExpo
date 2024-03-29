import React from 'react';
import Btn from "../../../../../../components/Btn/Btn";

const ModalVisitor = ({setModalVisitor}) => {
    return (
        <div className={'modaldata'}>
            <div className="modaldata__wrapper">
                <div onClick={() => setModalVisitor(false) } className="modaldata__close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16699 1.1665L12.8337 12.8332M1.16699 12.8332L12.8337 1.1665" stroke="black" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className="modaldata__title">Данные о посетителе</h2>
                <form className="modaldata__form">
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">ФИО</span>
                        <input type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Номер телефона</span>
                        <input type="text" className="modaldata__input"/>
                    </label>
                    <label htmlFor="" className="modaldata__label">
                        <span className="openModalData__span">Email</span>
                        <input type="text" className="modaldata__input"/>
                    </label>
                    <Btn text={'Подтвердить'}/>
                </form>
            </div>
        </div>
    );
};

export default ModalVisitor;