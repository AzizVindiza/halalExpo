import React from 'react';
import './StandCardSection.sass'
import standard from './standard.png'

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

                       <ul className="stCard__ul">
                           <li>Lorem ipsum dolor sit amet.</li>
                           <li>Lorem ipsum dolor sit amet.</li>
                           <li>Lorem ipsum dolor sit amet.</li>
                           <li>Lorem ipsum dolor sit amet.</li>
                           <span>$5298</span>
                       </ul>

                   </div>
                   <button className="stCard__btn">
                       Забронировать стенд
                   </button>
               </div>
            </div>
        </section>
    );
};

export default StandCardSection;