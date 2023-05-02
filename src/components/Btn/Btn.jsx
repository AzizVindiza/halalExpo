import React from 'react';
import "./Btn.sass"
const Btn = ({text,type,m}) => {
    return (
        <button className={`btn${m ? ` btn_${m}` : ""}`} type={type}>
            {text}
        </button>
    );
};

export default Btn;