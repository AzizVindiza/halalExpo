import React, {useContext} from 'react';
import {CustomContext} from "../../../../../Context";
import {useForm, useFormContext} from "react-hook-form";
import {objectIndustry} from "../ObjectIndustry/ObjectIndustry";

const FormCheckZone = ({item}) => {
    const {checkBoxZone,setCheckBoxZone,chooseIndustry,setChooseIndustry} = useContext(CustomContext)

   console.log(chooseIndustry)

    return (
        <div className={'formZone__single'}>
            <input
                name={"radio"}
                value={item}
                onChange={(event) => setChooseIndustry(event.target.value)}

                className="formZone__input" type="radio"/>
            <label  className="formZone__label formZone__label_second">
                <h2 className="formZone__h3 formZone__h3_second">{item}</h2>
            </label>

        </div>
    );
};

export default FormCheckZone;