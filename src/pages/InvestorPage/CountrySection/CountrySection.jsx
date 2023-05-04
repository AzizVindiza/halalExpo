import React from 'react';

const CountrySection = () => {
    return (
        <div className={'countrySection'}>
            <div className="countrySection__conttainer container">
                <div className="countrySection__wrapper">
                    <div className="countrySection__block">
                        <h2 className="countrySection__h2">Саудовская Аравия</h2>
                        <div className="countrySection__box">
                             <div className="countrySection__flag">
                                <img src={''} alt="" className="countrySection__pic"/>
                                <h3 className="countrySection__h3">Lorem Ipsum is </h3>
                            </div>
                         </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CountrySection;