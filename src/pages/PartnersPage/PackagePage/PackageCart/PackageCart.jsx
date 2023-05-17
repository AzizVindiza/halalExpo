import React from 'react';
import Btn from "../../../../components/Btn/Btn";
import "./packagecart.sass"
const PackageCart = () => {
    return (
        <div className={'packageCart'}>
            <div className="packageCart__container container">
                <div className="packageCart__h2">Lorem Ipsum is simply </div>
                <Btn text={'Подробнее'}/>
            </div>
        </div>
    );
};

export default PackageCart;