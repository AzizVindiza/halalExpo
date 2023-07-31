import React, {useContext, useState} from 'react';
import FormZone from "./FormZone/FormZone";
import BuyTicket from "../BuyTicket/BuyTicket";
import "./ticket.sass"
import ComponentZone from "./FormZone/ComponentZone/ComponentZone";
import {FormProvider, useForm} from "react-hook-form";
import {CustomContext} from "../../../Context";
import VisitorSectionAside from "../ProfileSection/VisitorSectionAside/VisitorSectionAside";
import {useSelector} from "react-redux";


const Ticket = () => {
    const {user} = useSelector((store) => store.user)


    const  {state,setState} = useContext(CustomContext)

    return (

        <div className={'ticket'}>

            {   user.user_type === 5 ?
                    state === "default" ?
                    <FormZone setState={setState}/>
                    : <ComponentZone/> : ""
            }
            {   user.type_register === "Посетитель" ?
                <BuyTicket/> : ""
            }


        </div>

    );
};

export default Ticket;