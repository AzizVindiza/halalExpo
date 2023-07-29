import React from 'react';
import Btn from "../../../components/Btn/Btn";
import "./cartNewsSection.sass"
const CartNewsSection = ({item}) => {
    return (
        <div className={'cartNewsSection'}>
            <div className="cartNewsSection__pic">
                <img src={item.image} alt="" className="cartNewsSection__img"/>
            </div>
            <h2 className="cartNewsSection__h2">{item.date}</h2>
            <h3 className="cartNewsSection__h3">{item.title}</h3>
            <p className="cartNewsSection__p">{item.description.slice(0, 3) + "..."}</p>
            <Btn m={'card'} text={'Читать далее'}/>

        </div>
    );
};

export default CartNewsSection;