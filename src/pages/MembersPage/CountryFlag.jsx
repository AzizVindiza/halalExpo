import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./country.sass"
const CountryFlag = () =>  {
    const [select, setSelect] = useState("kg");

    return (
        <div className="country">
            <ReactFlagsSelect
                value={'asad'}
                searchable={true}
                className={'country__flags'}
                selected={select}
                onSelect={(code) => setSelect(code)}
            />
        </div>
    );
}
export default CountryFlag