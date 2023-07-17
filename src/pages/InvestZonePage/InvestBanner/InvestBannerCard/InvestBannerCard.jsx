import React from 'react';
import "./investBannerCard.sass"
import center from "../../img/center.png"
import center2 from "../../img/center2.png"
import center3 from "../../img/center3.png"
import right3 from "../../img/right3.png"
import right2 from "../../img/right2.png"
import right from "../../img/right.png"
import left3 from "../../img/left3.png"
import left2 from "../../img/left2.png"
import left from "../../img/left.png"


const InvestBannerCard = ({item}) => {
    return (
        <div className="investBannerCard container">
            <div className="investBannerCard__img img1">
                <img className={"investBannerCard__img11"} src={center} alt=""/>
                <img className={"investBannerCard__img12"} src={center2} alt=""/>
                <img className={"investBannerCard__img121"} src={center3} alt=""/>

            </div>
            <div className="investBannerCard__img img2">
                <img className={"investBannerCard__img21"} src={right} alt=""/>
                <img className={"investBannerCard__img22"} src={right2} alt=""/>
                <img className={"investBannerCard__img221"} src={right3} alt=""/>
            </div>
            <div className="investBannerCard__img img3">
                <img className={"investBannerCard__img31"} src={left} alt=""/>
                <img className={"investBannerCard__img32"} src={left2} alt=""/>
                <img className={"investBannerCard__img321"} src={left3} alt=""/>
            </div>


            <h2 className="investBannerCard__h2">
                {item.h2}
            </h2>
            <p className="investBannerCard__p">
                {item.p}
            </p>

        </div>
    );
};

export default InvestBannerCard;