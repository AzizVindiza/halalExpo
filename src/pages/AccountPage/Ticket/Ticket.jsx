import React, {useContext, useState} from 'react';
import FormZone from "./FormZone/FormZone";
import "./ticket.sass"
import ComponentZone from "./FormZone/ComponentZone/ComponentZone";
import {FormProvider, useForm} from "react-hook-form";
import {CustomContext} from "../../../Context";


const Ticket = () => {


    const  {state,setState} = useContext(CustomContext)

    return (

        <div className={'ticket'}>
            {
                state === "default" ?
                    <FormZone setState={setState}/>
                    :
                    <ComponentZone/>
            }

        </div>

    );
};

export default Ticket;