import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./country.sass"
const CountryFlag = () =>  {
    const [select, setSelect] = useState("kg");
    const onSelect = (code) => setSelect(code);
    console.log("SELECT", select);
    return (
        <div className="country">
            <ReactFlagsSelect
                className={'country__flags'}
                selected={select}
                onSelect={onSelect}
            />
        </div>
    );
}
export default CountryFlag