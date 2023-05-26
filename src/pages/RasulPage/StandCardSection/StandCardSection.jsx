import React from 'react';
import './StandCardSection.sass'
import standard from './standard.png'
import Btn from "../../../components/Btn/Btn";

const StandCardSection = () => {
    return (
        <section className='stCard'>
            <div className="stCard__container container">
               <div className="stCard__box">
                   <h3 className="stCard__h3">STANDARD</h3>
                   <div className="stCard__row row">
                       <div className="stCard__img">
                           <img src={standard} alt=""/>
                       </div>
                       <div className="">
                           <div className="stCard__title"   >
                               <h4 className="stCard__h4">
                                   Пакет: Standard
                               </h4>
                               <span    className="stCard__span">
                           2м
                       </span>
                           </div>

                           <ul className="stCard__ul">
                               <li className="stCard__li">Lorem ipsum dolor sit amet.</li>
                               <li className="stCard__li">Lorem ipsum dolor sit amet.</li>
                               <li className="stCard__li">Lorem ipsum dolor sit amet.</li>
                               <li className="stCard__li">Lorem ipsum dolor sit amet.</li>

                           </ul>
                           <div className="stCard__price">$5298</div>

                           <Btn m={'stand'} type="button" text="Забронировать стенд"/>



                       </div>

                   </div>

               </div>
            </div>
        </section>
    );
};

export default StandCardSection;