import React from 'react';
import './CountrySection.sass'

const CountrySection = () => {
    const data = ["Саудовская Аравия","Турция","Бахрейн","Узбекистан","ОАЭ","Кувейт","Малайзия","Казахстан","Катар",
    "Оман","Иран","Таджикистан"]
    return (
        <div className={'countrySection'}>
            <div className="countrySection__container container">
                <div className="countrySection__wrapper">
                    {
                        data.map((item)=> (
                            <div className="countrySection__box">
                                <span className="countrySection__span"></span><h3 className="countrySection__h3">{item}</h3>
                            </div>
                        ))
                    }
                </div>










            </div>
        </div>
    );
};

export default CountrySection;