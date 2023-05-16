import React from 'react';
import Btn from "../../../components/Btn/Btn";
import "./cartNewsSection.sass"
const CartNewsSection = () => {
    return (
        <div className={'cartNewsSection'}>
            <div className="cartNewsSection__pic">
                <img src={''} alt="" className="cartNewsSection__img"/>
            </div>
            <h2 className="cartNewsSection__h2">12.10.2023</h2>
            <h3 className="cartNewsSection__h3">Lorem Ipsum is simply dummy </h3>
            <p className="cartNewsSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <Btn text={'Читать далее'}/>

        </div>
    );
};

export default CartNewsSection;