import React from 'react';
import "./Location.sass"
const Location = ({h2,p}) => {
    return (
        <div className="location">
            <h3 className="location__h3">Локация</h3>
            <h2 className="location__h2">{h2}</h2>
            <p className="location__p">{p}</p>
        </div>
    );
};

export default Location;