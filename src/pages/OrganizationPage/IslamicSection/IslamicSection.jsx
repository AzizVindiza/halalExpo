import React from 'react';
import "./IslamicSection.sass"
import ibic from "./ibic.svg"

const IslamicSection = () => {
    return (
        <div className={'islamic'}>
            <div className="container islamic__container">
                <div className="islamic__content">
                    <div className="islamic__ibic">
                        <img src={ibic} alt=""/>
                    </div>
                    <div className="islamic__txt">Исламская корпорация бизнеса и инвестиции <span className={'islamic__span'}>«IBIC»</span></div>
                </div>
                <div className="islamic__text">
                    <h2 className="islamic__h2">
                        В марте 2023 года Корпорация <span className={'islamic__ib'}>IBIC</span> совместно с ассоциацией Центральной Азии  <span className={'islamic__am'}>AMECA</span> организовала и провела в Бишкеке большой международный Форум исламского бизнеса и инвестиций <span className={'islamic__am'}>IBIF-2023</span>, в работе которого приняли участие 380 предпринимателей, представителей органов исполнительной и законодательной власти, бизнеса, инвестиционных компаний и банковских организаций.
                    </h2>

                </div>

            </div>

        </div>
    );
};

export default IslamicSection;