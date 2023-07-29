import React from 'react';
import Btn from "../../../components/Btn/Btn";
import "./cartNewsSection.sass"
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"

const CartNewsSection = ({item}) => {
    const navigate = useNavigate()
    return (
        <div className={'cartNewsSection'}>
            <div className="cartNewsSection__pic">
                <img src={item.image} alt="" className="cartNewsSection__img"/>
            </div>
            <h2 className="cartNewsSection__h2">{item.date}</h2>
            <h3 className="cartNewsSection__h3">{item.title}</h3>
            <p className="cartNewsSection__p">{item.description.slice(0, 100) + "..."}</p>
            <Link className={'cartNewsSection__btn'} to={`${item.id}`} >
                <Btn m={'card'} text={'Читать далее'}/>
            </Link>
        </div>
    );
};

export default CartNewsSection;