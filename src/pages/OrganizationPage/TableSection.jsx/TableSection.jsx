import React from 'react';
import "./tableSection.sass"
import TableCard from "./TableCard/tableCard";
import ibic from "./ibic.svg"
import ameca from "./ameca.svg"
import adm from "./adm.svg"
import city from "./city.svg"
import smart from "./smart.svg"
import sky from "./skyland.svg"
import avang from "./avangard.svg"

const TableSection = () => {
    return (
        <section className={'tableSection'}>
            <div className="container tableSection__container">
                <div className="tableSection__wrapper">
                    <TableCard  item={{img:ibic,h2:"Корпорация", span:"«КИБИ»",site:"www.cibic.info"}}/>
                    <TableCard  item={{img:ameca,h2:"Ассоциация предпринимателей мусульман Центральной Азии ", span:"«AMECA»",site:"www.ameca.site"}}/>
                    <TableCard  item={{img:adm,h2:"Маркетинговая компания ", span:"«ADM GROUP»",site:""}}/>
                    <TableCard  item={{img:sky,h2:"Международная туристическая компания ", span:"«SKYLAND»",site:"www.cibic.info"}}/>
                    <TableCard  item={{img:smart,h2:"Международная торговая компания ", span:"«СМАРТ»",site:"www.itcsmart.com"}}/>
                    <TableCard  item={{img:avang,h2:"Охранно-детективное агентство", span:" «АДМИРАЛ»",site:"www.odadmiral.com"}}/>
                    <TableCard  item={{img:city,h2:"Единая карта лояльности", span:"«CITY 312»",site:"www.city312.kg"}}/>

                </div>

            </div>
        </section>
    );
};

export default TableSection;