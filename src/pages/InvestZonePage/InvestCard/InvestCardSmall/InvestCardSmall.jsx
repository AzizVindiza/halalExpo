import React from 'react';
import "./investCardSmall.sass"
import promo from '../../img/promo.png'

const InvestCardSmall = ({item}) => {
    return (
        <div className={"investCardSmall"}>
            <div className="investCardSmall__wrapper">
                <div className="investCardSmall__row">
                    <div className="investCardSmall__box">
                        <h2 className="investCardSmall__h2">
                            {item.h2}
                        </h2>
                        <span className={"investCardSmall__span"}>
                         {item.price}
                    </span>

                    </div>
                    <div className="investCardSmall__img">
                        <img src={item.img} alt=""/>
                    </div>


                </div>
                <div className="investCardSmall__box2">
                    <span className="investCardSmall__span2">Количество мест: {item.num}</span>
                    <span className="investCardSmall__span3">Условия участия:</span>
                    <ul className="investCardSmall__ul">
                        {item.li.map((item,i)=>(
                            <li className={"investCardSmall__li"} key={i}>{item}</li>
                            )

                        )}

                    </ul>


                </div>



            </div>






        </div>
    );
};

export default InvestCardSmall;