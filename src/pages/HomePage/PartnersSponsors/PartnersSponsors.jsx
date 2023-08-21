import React, {useContext} from 'react';
import Btn from "../../../components/Btn/Btn";
import '../PartnersSection/PartnersSection.sass'
import lalafo from "./lalafo.svg"
import {CustomContext} from "../../../Context";



const PartnersSection = ({title}) => {
    const {setRequest}=useContext(CustomContext)
    return (
        <section className="partners">
            <h2 className="partners__title">Спонсоры</h2>
            <div className="container partners__container">
                <div className="partners__card">
                    <img className={'partners__img'} src={lalafo} alt=""/>
                    {/*<h2 className="partners__h2">*/}
                    {/*    Торгово-промышленная палата <br/>*/}
                    {/*    Кыргызской Республики*/}
                    {/*</h2>*/}
                </div>
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'}  src={minist} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Министерства иностранных дел <br/>*/}
                {/*        Кыргызской Республики*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'}  src={sanarip} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Санарип Кыргызстан*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'}  src={halal} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Государственный центр по <br/>*/}
                {/*        развитию Халал-индустрии <br/>*/}
                {/*        Кыргызской Республики*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'}  src={rating} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Пресс-служба Минэкономики <br/>*/}
                {/*        Кыргызской Республики*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'}  src={educ} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Министерства образования <br/>*/}
                {/*        Кыргызской Республики*/}

                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'}  src={viliage} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Министерства сельского хозяйства <br/>*/}
                {/*        Кыргызской Республики*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'} src={trans} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Министерства транспорта <br/>и коммуникаций*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'} src={ordo} alt=""/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        Культурный Центр «Рух Ордо» им.Ч.Айтматова*/}
                {/*    </h2>*/}
                {/*</div>*/}
                {/*<div className="partners__card">*/}
                {/*    <InvestorImg className={'partners__img'} src={lalafo} alt="Lalafo"/>*/}
                {/*    <h2 className="partners__h2">*/}
                {/*        LaLaFo*/}
                {/*    </h2>*/}
                {/*</div>*/}

            </div>
            <div onClick={() => setRequest(true)}  className="speaker__btn partners__btn">
                <Btn type="button" m={"big btn_border"} text="Стать спонсором"/>
            </div>

        </section>
    );
};

export default PartnersSection;